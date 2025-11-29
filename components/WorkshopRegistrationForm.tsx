'use client';

import { useState, useRef } from 'react';
import Script from 'next/script';

type ProfessionalCategory = 'academics' | 'startups' | 'industry' | '';

interface FormData {
  title: string;
  name: string;
  gender: string;
  mobile: string;
  email: string;
  professionalCategory: ProfessionalCategory;
  
  // Academics fields
  academicsPerson1: string;
  academicsPerson2: string;
  institutionName: string;
  department: string;
  academicsAddress: string;
  academicsFee: string;
  
  // Startups fields
  startupPerson1: string;
  startupPerson2: string;
  startupName: string;
  startupPlace: string;
  startupAddress: string;
  
  // Industry fields
  industryPerson1: string;
  industryPerson2: string;
  industryName: string;
  industryPlace: string;
  industryAddress: string;
  industryFee: string;
  
  // Common fields
  gstNumber: string;
  paymentScreenshot: File | null;
  declaration: boolean;
}

export default function WorkshopRegistrationForm() {
  const [formData, setFormData] = useState<FormData>({
    title: '',
    name: '',
    gender: '',
    mobile: '',
    email: '',
    professionalCategory: '',
    academicsPerson1: '',
    academicsPerson2: '',
    institutionName: '',
    department: '',
    academicsAddress: '',
    academicsFee: '12000',
    startupPerson1: '',
    startupPerson2: '',
    startupName: '',
    startupPlace: '',
    startupAddress: '',
    industryPerson1: '',
    industryPerson2: '',
    industryName: '',
    industryPlace: '',
    industryAddress: '',
    industryFee: '29500',
    gstNumber: '',
    paymentScreenshot: null,
    declaration: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else if (type === 'radio') {
      setFormData(prev => ({ ...prev, [name]: value }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Check file size (268.44MB max)
      if (file.size > 268.44 * 1024 * 1024) {
        alert('File size exceeds 268.44MB');
        return;
      }
      setFormData(prev => ({ ...prev, paymentScreenshot: file }));
    }
  };

  const calculateAmount = () => {
    if (formData.professionalCategory === 'academics') {
      return parseInt(formData.academicsFee);
    } else if (formData.professionalCategory === 'startups') {
      return 29500; // 25000 + 18% GST
    } else if (formData.professionalCategory === 'industry') {
      return parseInt(formData.industryFee);
    }
    return 0;
  };

  const handleRazorpayPayment = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.title || !formData.name || !formData.gender || !formData.mobile || !formData.email) {
      alert('Please fill all required fields');
      return;
    }

    if (!formData.professionalCategory) {
      alert('Please select your professional category');
      return;
    }

    if (!formData.declaration) {
      alert('Please accept the declaration');
      return;
    }

    setIsSubmitting(true);

    const amount = calculateAmount();

    // Initialize Razorpay
    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || 'your_razorpay_key_id',
      amount: amount * 100, // Amount in paise
      currency: 'INR',
      name: 'Tanu Lifesciences Pvt Ltd',
      description: 'Workshop Registration - Lateral Flow Immuno Assay',
      image: '/logo.png',
      handler: async function (response: any) {
        // Payment successful
        try {
          // Submit form data with payment details
          const submitData = new FormData();
          Object.entries(formData).forEach(([key, value]) => {
            if (key === 'paymentScreenshot' && value instanceof File) {
              submitData.append(key, value);
            } else if (typeof value === 'string' || typeof value === 'boolean') {
              submitData.append(key, value.toString());
            }
          });
          submitData.append('razorpayPaymentId', response.razorpay_payment_id);
          submitData.append('razorpayOrderId', response.razorpay_order_id || '');
          submitData.append('razorpaySignature', response.razorpay_signature || '');
          submitData.append('amount', amount.toString());

          const res = await fetch('/api/workshop-registration', {
            method: 'POST',
            body: submitData,
          });

          const result = await res.json();

          if (result.success) {
            setSubmitMessage('Registration successful! You will receive a confirmation email shortly.');
            // Reset form
            setFormData({
              title: '',
              name: '',
              gender: '',
              mobile: '',
              email: '',
              professionalCategory: '',
              academicsPerson1: '',
              academicsPerson2: '',
              institutionName: '',
              department: '',
              academicsAddress: '',
              academicsFee: '12000',
              startupPerson1: '',
              startupPerson2: '',
              startupName: '',
              startupPlace: '',
              startupAddress: '',
              industryPerson1: '',
              industryPerson2: '',
              industryName: '',
              industryPlace: '',
              industryAddress: '',
              industryFee: '29500',
              gstNumber: '',
              paymentScreenshot: null,
              declaration: false,
            });
            if (fileInputRef.current) {
              fileInputRef.current.value = '';
            }
          } else {
            setSubmitMessage('Registration failed. Please try again.');
          }
        } catch (error) {
          console.error('Submission error:', error);
          setSubmitMessage('An error occurred. Please try again.');
        }
        setIsSubmitting(false);
      },
      prefill: {
        name: formData.name,
        email: formData.email,
        contact: formData.mobile,
      },
      theme: {
        color: '#3399cc',
      },
      modal: {
        ondismiss: function() {
          setIsSubmitting(false);
        }
      }
    };

    const razorpay = new (window as any).Razorpay(options);
    razorpay.open();
  };

  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
      
      <form onSubmit={handleRazorpayPayment} className="space-y-6">
        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Title: <span className="text-red-500">*</span>
          </label>
          <div className="space-x-4">
            {['Dr.', 'Mr.', 'Ms.'].map(title => (
              <label key={title} className="inline-flex items-center">
                <input
                  type="radio"
                  name="title"
                  value={title}
                  checked={formData.title === title}
                  onChange={handleInputChange}
                  className="mr-2"
                  required
                />
                {title}
              </label>
            ))}
          </div>
        </div>

        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Name: <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>

        {/* Gender */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Gender: <span className="text-red-500">*</span>
          </label>
          <div className="space-x-4">
            {['Male', 'Female', 'Prefer not to say'].map(gender => (
              <label key={gender} className="inline-flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value={gender}
                  checked={formData.gender === gender}
                  onChange={handleInputChange}
                  className="mr-2"
                  required
                />
                {gender}
              </label>
            ))}
          </div>
        </div>

        {/* Mobile */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Mobile: <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleInputChange}
            pattern="[0-9]{10}"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="10-digit mobile number"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email: <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>

        {/* Professional Details */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Professional Details: <span className="text-red-500">*</span>
          </label>
          <div className="space-x-4">
            {[
              { value: 'academics', label: 'Academics' },
              { value: 'startups', label: 'Start-ups' },
              { value: 'industry', label: 'Industry' }
            ].map(option => (
              <label key={option.value} className="inline-flex items-center">
                <input
                  type="radio"
                  name="professionalCategory"
                  value={option.value}
                  checked={formData.professionalCategory === option.value}
                  onChange={handleInputChange}
                  className="mr-2"
                  required
                />
                {option.label}
              </label>
            ))}
          </div>
        </div>

        {/* Academics Section */}
        {formData.professionalCategory === 'academics' && (
          <div className="bg-blue-50 p-6 rounded-lg space-y-4">
            <h3 className="font-bold text-lg text-blue-900 mb-4">Academics Details</h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Person 1: (Name)
              </label>
              <input
                type="text"
                name="academicsPerson1"
                value={formData.academicsPerson1}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Enter name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Person 2: (Name) <span className="text-sm text-gray-500">(Optional for 1+1 offer)</span>
              </label>
              <input
                type="text"
                name="academicsPerson2"
                value={formData.academicsPerson2}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Enter name for 1+1 offer"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Institution Name:
              </label>
              <input
                type="text"
                name="institutionName"
                value={formData.institutionName}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Department:
              </label>
              <input
                type="text"
                name="department"
                value={formData.department}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Address:
              </label>
              <textarea
                name="academicsAddress"
                value={formData.academicsAddress}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Course Fees:
              </label>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="academicsFee"
                    value="10000"
                    checked={formData.academicsFee === '10000'}
                    onChange={handleInputChange}
                    className="mr-2"
                  />
                  ₹10,000 (15+ students from one academy)
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="academicsFee"
                    value="12000"
                    checked={formData.academicsFee === '12000'}
                    onChange={handleInputChange}
                    className="mr-2"
                  />
                  ₹12,000 (1+1 offer - two participants)
                </label>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Note: If two participants from academia register together under the student category, 
                they can avail the special 1+1 offer — ₹12,000 per person instead of ₹15,000
              </p>
            </div>
          </div>
        )}

        {/* Startups Section */}
        {formData.professionalCategory === 'startups' && (
          <div className="bg-green-50 p-6 rounded-lg space-y-4">
            <h3 className="font-bold text-lg text-green-900 mb-4">Start-up Details (Only 2 Persons Allowed)</h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Person 1: (Name)
              </label>
              <input
                type="text"
                name="startupPerson1"
                value={formData.startupPerson1}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                placeholder="Enter name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Person 2: (Name)
              </label>
              <input
                type="text"
                name="startupPerson2"
                value={formData.startupPerson2}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                placeholder="Enter name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Name of the Start-up:
              </label>
              <input
                type="text"
                name="startupName"
                value={formData.startupName}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Place:
              </label>
              <input
                type="text"
                name="startupPlace"
                value={formData.startupPlace}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Address:
              </label>
              <textarea
                name="startupAddress"
                value={formData.startupAddress}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div className="bg-white p-4 rounded border-2 border-green-600">
              <p className="font-semibold text-lg">Course Fees: ₹25,000 + 18% GST = ₹29,500/-</p>
            </div>
          </div>
        )}

        {/* Industry Section */}
        {formData.professionalCategory === 'industry' && (
          <div className="bg-purple-50 p-6 rounded-lg space-y-4">
            <h3 className="font-bold text-lg text-purple-900 mb-4">Industry Details (Only 2 Persons Allowed)</h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Person 1: (Name)
              </label>
              <input
                type="text"
                name="industryPerson1"
                value={formData.industryPerson1}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                placeholder="Enter name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Person 2: (Name)
              </label>
              <input
                type="text"
                name="industryPerson2"
                value={formData.industryPerson2}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                placeholder="Enter name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Name of the Industry:
              </label>
              <input
                type="text"
                name="industryName"
                value={formData.industryName}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Place:
              </label>
              <input
                type="text"
                name="industryPlace"
                value={formData.industryPlace}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Address:
              </label>
              <textarea
                name="industryAddress"
                value={formData.industryAddress}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Course Fees:
              </label>
              <div className="space-y-2">
                <label className="flex items-start bg-white p-3 rounded border-2 border-purple-300">
                  <input
                    type="radio"
                    name="industryFee"
                    value="29500"
                    checked={formData.industryFee === '29500'}
                    onChange={handleInputChange}
                    className="mr-2 mt-1"
                  />
                  <span>₹25,000 + 18% GST = ₹29,500/- (Workshop participation only)</span>
                </label>
                <label className="flex items-start bg-white p-3 rounded border-2 border-purple-600">
                  <input
                    type="radio"
                    name="industryFee"
                    value="59000"
                    checked={formData.industryFee === '59000'}
                    onChange={handleInputChange}
                    className="mr-2 mt-1"
                  />
                  <span>₹50,000 + 18% GST = ₹59,000/- (Stall charges + 2 people workshop participation)</span>
                </label>
              </div>
            </div>
          </div>
        )}

        {/* GST Number */}
        {formData.professionalCategory && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Provide your GST Number: <span className="text-sm text-gray-500">(Optional)</span>
            </label>
            <input
              type="text"
              name="gstNumber"
              value={formData.gstNumber}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Enter GST number if applicable"
            />
          </div>
        )}

        {/* Payment Screenshot Upload */}
        {formData.professionalCategory && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Upload Screenshot of Payment: <span className="text-red-500">*</span>
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <input
                ref={fileInputRef}
                type="file"
                onChange={handleFileChange}
                accept="image/*,.pdf"
                className="hidden"
                id="file-upload"
                required
              />
              <label
                htmlFor="file-upload"
                className="cursor-pointer text-blue-600 hover:text-blue-700 font-medium"
              >
                Drop a file here or click to upload
              </label>
              <p className="text-sm text-gray-500 mt-2">Maximum file size: 268.44MB</p>
              {formData.paymentScreenshot && (
                <p className="text-sm text-green-600 mt-2">
                  Selected: {formData.paymentScreenshot.name}
                </p>
              )}
            </div>
          </div>
        )}

        {/* Declaration */}
        {formData.professionalCategory && (
          <div>
            <label className="flex items-start">
              <input
                type="checkbox"
                name="declaration"
                checked={formData.declaration}
                onChange={handleInputChange}
                className="mr-3 mt-1"
                required
              />
              <span className="text-sm text-gray-700">
                <span className="text-red-500">*</span> I confirm that I have read the course contents, 
                agree to the Course structure and agree to attend for the total duration of the course. 
                (Once the course fee is paid it will not be reimbursed).
              </span>
            </label>
          </div>
        )}

        {/* Submit Button */}
        <div className="flex flex-col items-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`px-8 py-3 rounded-lg font-semibold text-white text-lg transition-all ${
              isSubmitting
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl'
            }`}
          >
            {isSubmitting ? 'Processing...' : 'Pay Now & Submit'}
          </button>

          {submitMessage && (
            <div className={`mt-4 p-4 rounded-lg ${
              submitMessage.includes('successful')
                ? 'bg-green-100 text-green-800'
                : 'bg-red-100 text-red-800'
            }`}>
              {submitMessage}
            </div>
          )}
        </div>
      </form>
    </>
  );
}
