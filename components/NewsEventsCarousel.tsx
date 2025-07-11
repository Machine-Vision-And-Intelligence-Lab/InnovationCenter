'use client';

import { useState, useEffect, useRef, SetStateAction} from 'react';

const NewsEventsCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);
    const containerRef = useRef(null);

// todo: Replace with actual news and events data
    const newsEvents = [
        {
            id: 1,
            title: 'Innovation Center Launches New AI Research Program',
            description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
        },
        {
            id: 2,
            title: 'Annual Tech Summit 2025',
            description: 'Join us for the biggest technology conference of the year featuring keynote speakers, workshops, and networking opportunities with industry leaders.',
        },
        {
            id: 3,
            title: 'Partnership with Leading Universities Announced',
            description: 'We are excited to announce strategic partnerships with top universities to advance research in sustainable technology and foster innovation in education.',
        },
        {
            id: 4,
            title: 'Developer Workshop: Next.js Best Practices',
            description: 'Learn advanced Next.js techniques and best practices from experienced developers. Perfect for both beginners and experienced developers.',
        }
    ];

    // Auto-swipe functionality
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % newsEvents.length);
        }, 5000); // todo: Change time (for no auto-swipe, set to very large number)

        return () => clearInterval(interval);
    }, [newsEvents.length]);

    // Touch/swipe functionality
    const minSwipeDistance = 50;

    // @ts-ignore
    const onTouchStart = (e) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };
// @ts-ignore
    const onTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;

        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe) {
            goToNext();
        } else if (isRightSwipe) {
            goToPrevious();
        }
    };

    // Mouse drag functionality for desktop
    const [isDragging, setIsDragging] = useState(false);
    const [mouseStart, setMouseStart] = useState(null);
    const [mouseEnd, setMouseEnd] = useState(null);

    // @ts-ignore
    const onMouseDown = (e) => {
        setIsDragging(true);
        setMouseEnd(null);
        setMouseStart(e.clientX);
    };

    // @ts-ignore
    const onMouseMove = (e) => {
        if (!isDragging) return;
        setMouseEnd(e.clientX);
    };

    const onMouseUp = () => {
        if (!isDragging || !mouseStart || !mouseEnd) {
            setIsDragging(false);
            return;
        }

        const distance = mouseStart - mouseEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe) {
            goToNext();
        } else if (isRightSwipe) {
            goToPrevious();
        }

        setIsDragging(false);
    };

    const goToPrevious = () => {
        setCurrentSlide((prev) => (prev - 1 + newsEvents.length) % newsEvents.length);
    };

    const goToNext = () => {
        setCurrentSlide((prev) => (prev + 1) % newsEvents.length);
    };

    const goToSlide = (index: SetStateAction<number>) => {
        setCurrentSlide(index);
    };

    return (
        <div className="relative w-full max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Header */}
            <div className="bg-orange-500 text-white px-6 py-4">
                <h2 className="text-2xl font-bold">News & Events</h2>
            </div>

            {/* Main content container */}
            <div
                ref={containerRef}
                className="relative h-80 overflow-hidden cursor-grab select-none"
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
                onMouseDown={onMouseDown}
                onMouseMove={onMouseMove}
                onMouseUp={onMouseUp}
                onMouseLeave={onMouseUp}
                style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
            >
                <div
                    className="flex transition-transform duration-500 ease-in-out h-full"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                    {newsEvents.map((item) => (
                        <div key={item.id} className="min-w-full h-full p-6 flex flex-col justify-start">
                            <h3 className="text-xl font-bold text-gray-800 mb-3">
                                {item.title}
                            </h3>
                            <div className="flex-1 overflow-y-auto">
                                <p className="text-gray-600 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center py-4 space-x-2 bg-gray-50">
                {newsEvents.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                            index === currentSlide
                                ? 'bg-orange-500'
                                : 'bg-gray-300 hover:bg-gray-400'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default NewsEventsCarousel;