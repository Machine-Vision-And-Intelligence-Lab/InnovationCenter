'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const PrimaryImageCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // todo: Replace with actual images
    const images = [
        {
            id: 1,
            src: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=400&fit=crop',
            alt: 'Mountain landscape with lake',
            title: 'Beautiful Mountain View'
        },
        {
            id: 2,
            src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop',
            alt: 'Sunset over ocean',
            title: 'Ocean Sunset'
        },
        {
            id: 3,
            src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=400&fit=crop',
            alt: 'Forest pathway',
            title: 'Forest Adventure'
        },
        {
            id: 4,
            src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=400&fit=crop',
            alt: 'Desert landscape',
            title: 'Desert Exploration'
        }
    ];

    // Auto-swipe functionality
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % images.length);
        }, 4000); // todo: Change time (for no auto-swipe, set to very large number)

        return () => clearInterval(interval);
    }, [images.length]);

    const goToPrevious = () => {
        setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
    };

    const goToNext = () => {
        setCurrentSlide((prev) => (prev + 1) % images.length);
    };

    return (
        <div className="relative w-full max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Main image container */}
            <div className="relative h-96 overflow-hidden">
                <div
                    className="flex transition-transform duration-500 ease-in-out h-full"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                    {images.map((image) => (
                        <div key={image.id} className="min-w-full h-full relative">
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                                <h3 className="text-white text-2xl font-bold text-center px-4">
                                    {image.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Navigation arrows */}
                <button
                    onClick={goToPrevious}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-lg transition-all duration-200 z-10"
                    aria-label="Previous image"
                >
                    <ChevronLeft className="w-6 h-6 text-gray-800" />
                </button>

                <button
                    onClick={goToNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-lg transition-all duration-200 z-10"
                    aria-label="Next image"
                >
                    <ChevronRight className="w-6 h-6 text-gray-800" />
                </button>
            </div>

        </div>
    );
};

export default PrimaryImageCarousel;