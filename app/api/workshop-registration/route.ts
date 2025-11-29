import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    // Extract form fields
    const data = {
      title: formData.get('title'),
      name: formData.get('name'),
      gender: formData.get('gender'),
      mobile: formData.get('mobile'),
      email: formData.get('email'),
      professionalCategory: formData.get('professionalCategory'),
      academicsPerson1: formData.get('academicsPerson1'),
      academicsPerson2: formData.get('academicsPerson2'),
      institutionName: formData.get('institutionName'),
      department: formData.get('department'),
      academicsAddress: formData.get('academicsAddress'),
      academicsFee: formData.get('academicsFee'),
      startupPerson1: formData.get('startupPerson1'),
      startupPerson2: formData.get('startupPerson2'),
      startupName: formData.get('startupName'),
      startupPlace: formData.get('startupPlace'),
      startupAddress: formData.get('startupAddress'),
      industryPerson1: formData.get('industryPerson1'),
      industryPerson2: formData.get('industryPerson2'),
      industryName: formData.get('industryName'),
      industryPlace: formData.get('industryPlace'),
      industryAddress: formData.get('industryAddress'),
      industryFee: formData.get('industryFee'),
      gstNumber: formData.get('gstNumber'),
      razorpayPaymentId: formData.get('razorpayPaymentId'),
      razorpayOrderId: formData.get('razorpayOrderId'),
      razorpaySignature: formData.get('razorpaySignature'),
      amount: formData.get('amount'),
      submittedAt: new Date().toISOString(),
    };

    // Handle file upload
    const file = formData.get('paymentScreenshot') as File;
    let fileName = '';

    if (file) {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      // Create uploads directory if it doesn't exist
      const uploadsDir = join(process.cwd(), 'public', 'uploads', 'workshop-registrations');
      try {
        await mkdir(uploadsDir, { recursive: true });
      } catch (error) {
        // Directory might already exist
      }

      // Generate unique filename
      const timestamp = Date.now();
      fileName = `${timestamp}-${file.name}`;
      const filePath = join(uploadsDir, fileName);

      await writeFile(filePath, buffer);
    }

    // TODO: Send confirmation email
    // You can integrate with services like SendGrid, AWS SES, or Nodemailer here

    // TODO: Save to database
    // You can integrate with your preferred database here (MongoDB, PostgreSQL, etc.)

    // For now, we'll just log the data
    console.log('Workshop Registration Received:', {
      ...data,
      paymentScreenshotPath: fileName ? `/uploads/workshop-registrations/${fileName}` : null,
    });

    // In production, you should:
    // 1. Verify the Razorpay payment signature
    // 2. Save the registration to a database
    // 3. Send confirmation email to the user
    // 4. Send notification email to admin

    return NextResponse.json({
      success: true,
      message: 'Registration received successfully',
      registrationId: `WS${Date.now()}`,
    });
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { success: false, message: 'Registration failed' },
      { status: 500 }
    );
  }
}
