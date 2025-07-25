"use client";

import React from 'react';

interface ProgramCardProps {
    heading: string;
    pdfLink: string;
    formLink: string;
    number: number;
    date: string;
}

const ProgramCard: React.FC<ProgramCardProps> = ({ heading, pdfLink, formLink, number, date }) => {
    const handlePdfClick = () => {
        window.open(pdfLink, '_blank');
    };

    const handleApplyClick = () => {
        window.open(formLink, '_blank');
    };

    return (
        <div className="py-4 border-b border-gray-200 last:border-b-0">
            <div className="flex justify-between items-start gap-4">
                <div className="flex-1">
                    <h2
                        className="text-lg font-normal text-gray-600 cursor-pointer hover:text-gray-800 transition-colors duration-200 flex items-start gap-3 mb-3"
                        onClick={handlePdfClick}
                    >
                        <span className="text-gray-500 font-normal min-w-[20px]">{number}</span>
                        <span className="leading-relaxed">{heading}</span>
                    </h2>
                    <div className="ml-6">
            <span className="bg-primary-400 text-white px-3 py-1 rounded text-sm font-medium">
              {date}
            </span>
                    </div>
                </div>

                <button
                    onClick={handleApplyClick}
                    className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded transition-colors duration-200 flex items-center gap-2 mt-1"
                >
                    <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    Apply Now
                </button>
            </div>
        </div>
    );
};

export default ProgramCard;