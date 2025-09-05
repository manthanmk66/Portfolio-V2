'use client';

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

const AuthCallback = () => {
  const searchParams = useSearchParams();
  const [status, setStatus] = useState('Processing authentication...');

  useEffect(() => {
    const code = searchParams.get('code');
    const error = searchParams.get('error');
    const state = searchParams.get('state');

    if (error) {
      setStatus(`Authentication failed: ${error}`);
      console.error('OAuth error:', error);
      return;
    }

    if (code) {
      setStatus('Authentication successful! Redirecting to OneTrack app...');
      
      // Try to redirect to mobile app
      const mobileUrl = `onetrack://auth?code=${code}&state=${state}`;
      
      // Attempt redirect
      window.location.href = mobileUrl;
      
      // Fallback message after 2 seconds
      setTimeout(() => {
        setStatus('Authentication complete! Please return to your OneTrack mobile app.');
      }, 2000);
      
    } else {
      setStatus('Waiting for authentication data...');
    }
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        {/* OneTrack branding */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">OneTrack</h1>
          <p className="text-gray-400">Privacy-first life tracker</p>
        </div>

        {/* Status message */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <div className="mb-4">
            {status.includes('successful') ? (
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            ) : status.includes('failed') ? (
              <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
            ) : (
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto">
                <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
          </div>
          
          <p className="text-white text-lg mb-2">Google Drive Sync</p>
          <p className="text-gray-300 text-sm">{status}</p>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-xs">
            Secured with end-to-end encryption
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthCallback;
