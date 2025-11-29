'use client';

import { useState } from 'react';
import WorkshopRegistrationForm from '@/components/WorkshopRegistrationForm';
import Image from 'next/image';

export default function RegistrationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 z-50 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all"
        aria-label="Scroll to top"
      >
        ↑
      </button>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Workshop Header */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex flex-col items-center mb-6">
            <div className="relative w-full h-64 mb-4 bg-gradient-to-r from-blue-100 to-blue-50 flex items-center justify-center rounded-lg overflow-hidden">
              <div className="text-center p-6">
                <h2 className="text-2xl font-bold text-blue-800 mb-2">Lateral Flow Immuno Assay Workshop</h2>
                <p className="text-blue-600">Hands-on Training</p>
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
              Design & Development of Lateral Flow Immuno Assay
            </h1>
            <p className="text-xl text-center text-blue-600 font-semibold mb-2">
              Hands on WORKSHOP training from Idea to Industry ready
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 w-full mt-4">
              <p className="text-lg font-semibold text-gray-800">
                📅 Date: 22nd and 23rd of December 2025
              </p>
            </div>
          </div>

          {/* Venue Information */}
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <h3 className="font-bold text-lg mb-2">📍 Venue:</h3>
            <p className="font-semibold">The University of Trans-Disciplinary Health Sciences and Technology (TDU)</p>
            <p className="text-gray-700 mt-2">
              Post Attur via Yelahanka, Jarakabande Kaval, 74/2, Bengaluru, Karnataka 560119
            </p>
            <a
              href="https://maps.google.com/?q=The+University+of+Trans-Disciplinary+Health+Sciences+and+Technology+TDU+Bengaluru"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline mt-2 inline-block"
            >
              Click here for Location →
            </a>
          </div>

          {/* Course Details */}
          <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
            <h3 className="font-bold text-lg mb-3">📝 Note:</h3>
            <div className="space-y-2 text-gray-700">
              <p><strong>Charges:</strong></p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>₹15,000 for students (If 1+1, then ₹12,000 per student)</li>
                <li className="text-sm text-gray-600">If more than 15 students from one academy register, then ₹10,000 per student</li>
                <li>₹25,000 for Startups (only 2 people per startup is allowed)</li>
                <li>₹50,000 for Industry (only 2 people per industry is allowed)</li>
                <li>₹50,000 for industry stalls/Booths</li>
              </ul>
              <p className="mt-4"><strong>Accommodation:</strong> Available (Charges apply)</p>
              <p><strong>Food:</strong> Lunch & Two times high tea (complementary)</p>
              <p><strong>Inclusions:</strong> Notebook, pen, printed notes, and Certificate from Industry experts</p>
            </div>
          </div>
        </div>

        {/* Registration Form */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-3">
            Registration Form
          </h2>
          <WorkshopRegistrationForm />
        </div>

        {/* Payment Details */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Bank Account Details:</h3>
          <div className="space-y-2 text-gray-700 bg-gray-50 p-4 rounded">
            <p><strong>Account holder name:</strong> Tanu Lifesciences Pvt Ltd</p>
            <p><strong>Account Number:</strong> 50200114023123</p>
            <p><strong>IFSC Code:</strong> HDFC0000549</p>
            <p><strong>Bank name:</strong> HDFC Bank</p>
            <p className="mt-4"><strong>UPI ID:</strong> 9632189056@ibl</p>
            <p className="text-sm text-gray-600 mt-4">
              To confirm your seat, please provide details like date, amount, and transaction ID for online transfer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
