'use client';

import { useState } from 'react';

export default function HeaderPage() {
  const [preview, setPreview] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const objectUrl = URL.createObjectURL(file);
      setPreview(objectUrl);
    }
  };

  const handleApply = () => {
    if (selectedFile) {
      alert(`Applied logo: ${selectedFile.name}`);
    }
  };

  return (
    <div>
      <div className="shadow-xl mb-6">
        <header className="bg-white border-b border-gray-200">
          <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex-1 md:flex md:items-center md:gap-12">
                <a className="block" href="#">
                  <img
                    src={preview || '/default-logo.png'}
                    alt="Site Logo"
                    className="h-8 w-auto object-contain"
                  />
                </a>
              </div>

              <div className="md:flex md:items-center md:gap-12 opacity-60 pointer-events-none select-none">
                <nav aria-label="Global" className="hidden md:block">
                  <ul className="flex items-center gap-6 text-sm">
                    <li>
                      <a className="text-gray-600" href="#"> About us </a>
                    </li>
                    <li>
                      <a className="text-gray-600" href="#"> Incubation </a>
                    </li>
                    <li>
                      <a className="text-gray-600" href="#"> Programs </a>
                    </li>
                    <li>
                      <a className="text-gray-600" href="#"> Portfolio </a>
                    </li>
                    <li>
                      <a className="text-gray-600" href="#"> Insight </a>
                    </li>
                    <li>
                      <a className="text-gray-600" href="#"> Connect </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </header>
      </div>

      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-2">Site Logo</h2>
            <p className="text-gray-600 mb-4">
              Upload or change the logo shown in the navbar.
            </p>

            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
              <div className="space-y-1 text-center w-full">
                <div className="flex items-center justify-center">
                  {selectedFile ? (
                    <span className="text-sm text-gray-700 truncate max-w-xs">
                      {selectedFile.name}
                    </span>
                  ) : (
                    <>
                      <svg
                        className="mx-auto h-12 w-12 text-gray-400"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </>
                  )}
                </div>

                <div className="flex text-sm text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer bg-indigo-50 rounded-md mx-auto font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                  >
                    <span>{selectedFile ? 'Change file' : 'Upload a file'}</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="sr-only"
                    />
                  </label>
                </div>
                <p className="text-xs text-gray-500">PNG or JPG up to 5MB</p>
              </div>
            </div>

            <div className="mt-4 flex justify-end">
              <button
                onClick={handleApply}
                disabled={!selectedFile}
                className={`px-4 py-2 rounded-md text-white font-medium ${
                  selectedFile
                    ? 'bg-indigo-600 hover:bg-indigo-700'
                    : 'bg-indigo-300 cursor-not-allowed'
                }`}
              >
                Apply
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}