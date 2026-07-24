'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import { SLIDES } from '../../../../lib/data/slides';
import Autoplay from 'embla-carousel-autoplay';

export default function HeroBanner() {
    
    const [emblaRef, emblaApi] = useEmblaCarousel(
        { loop: true },
        [Autoplay({ delay: 3000 })]
    );
    const [selectedIndex, setSelectedIndex] = useState(0);

    const scrollTo = useCallback((index) => {
        if (!emblaApi) return;

        emblaApi.scrollTo(index);

        const autoPlay = emblaApi.plugins().autoplay
        if (autoPlay) {
            autoPlay.reset();
        }

    }, [emblaApi]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        emblaApi.on('select', onSelect);
        emblaApi.on('reInit', onSelect);
    }, [emblaApi, onSelect]);

    return (
        <div className="flex-1 relative bg-stone-100 min-h-120">
            
            <div className="overflow-hidden h-full absolute inset-0" ref={emblaRef}>
                
                <div className="flex h-full">
                    
                    {SLIDES.map((slide, i) => (
                        <div key={i} className="flex-[0_0_100%] min-w-0 relative h-full">
                            
                            <div className="absolute inset-0">
                                <Image
                                    src={slide.image_url}
                                    alt={slide.heading}
                                    height={900}
                                    width={1800}
                                    priority
                                    className="h-full w-full object-cover"
                                />
                                {/* <div className="absolute inset-0 bg-black/10" /> */}
                            </div>

                            <div className="absolute inset-0 flex flex-col justify-center px-10 py-10 z-10">
                                <p className="text-sm font-semibold text-gray-900 uppercase tracking-widest mb-2">
                                    {slide.eyebrow}
                                </p>

                                <h1 className="text-5xl font-extrabold text-gray-900 mb-4 max-w-md">
                                    {slide.heading}
                               </h1>

                                <p className="font-semibold text-gray-900 mb-9.5 max-w-60">
                                    {slide.description}
                                </p>

                                <p className="text-orange-600 font-extrabold mb-4 uppercase">{slide.badge}</p>

                                <Link
                                    href={slide.href}
                                    className="inline-flex items-center justify-center w-fit border-2 border-stone-900 px-12 py-2.5 font-semibold text-stone-900 hover:bg-stone-900 hover:text-white transition-colors"
                                >
                                    {slide.cta}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Pagination Dots */}
            <div className="absolute bottom-12 left-10 flex items-center gap-3 z-20">
                {SLIDES.map((_, i) => (
                    <button
                        key={i}
                        type="button"
                        onClick={() => scrollTo(i)}
                        aria-label={`Show slide ${i + 1}`}
                        className={`h-1.75 rounded-full transition-all duration-300 ${
                            i === selectedIndex ? 'bg-gray-700 w-7.5' : 'bg-gray-300 w-4'
                        }`}
                    />
                ))}
            </div>
        </div>
    );
}