'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from "@/interfaces/Image";
import getImages from "@/hooks/getImages";

const PrimaryImageCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
     const [images, setImages] = useState<Image[]>([]);

    useEffect(() => {
         const fetchedImages = getImages();
        setImages(fetchedImages);
    }, []);

    // Auto-swipe functionality
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % images.length);
        }, 7000);

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

            <div className=" h-full overflow-hidden">
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
                            <div className="absolute bg-transparent bg-opacity-20 flex items-center justify-center top-10">
                                <h3 className="text-white text-2xl font-bold text-center px-4">
                                    {image.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>


                <button
                    onClick={goToPrevious}
                    className="absolute left-4 top-1/2 -translate-y-1/2  bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-lg transition-all duration-200 "
                    aria-label="Previous image"
                >
                    <ChevronLeft className="w-6 h-6 text-gray-800 " />
                </button>

                <button
                    onClick={goToNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-lg transition-all duration-200 z-10"
                    aria-label="Next image"
                >
                    <ChevronRight className=" h-6 text-gray-800 " />
                </button>
            </div>

        </div>
    );
};

export default PrimaryImageCarousel;