'use client';

import { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import CategorySidebar from './category/category-sidebar';
import CategoryMegaMenu from './category-mega-menu';
import HeroBanner from './hero-banner';
import FeatureBadges from './feature-badges';

const SIDEBAR_WIDTH = 300;
const GAP = 16;

export default function HeroSection() {
    const [activeCategory, setActiveCategory] = useState(null);
    const closeTimeout = useRef(null);

    function handleHover(category) {
        if (category.slug === 'categories') {
            setActiveCategory(null);
            return;
        }
        
        if (closeTimeout.current) {
            clearTimeout(closeTimeout.current);
            closeTimeout.current = null;
        }
        setActiveCategory(category);
    }

    function scheduleClose() {
        closeTimeout.current = setTimeout(() => setActiveCategory(null), 150);
    }

    return (
        <section className="mb-6">
            
            <div className="relative flex gap-7.5" onMouseLeave={scheduleClose}>

                <CategorySidebar activeCategory={activeCategory} onHoverCategory={handleHover} />

                <div className='flex-1 flex flex-col gap-5'>
                    <HeroBanner />
                    <FeatureBadges />
                </div>

                <AnimatePresence>
                    {activeCategory && (
                        <motion.div
                            initial={{ opacity: 0, x: -8 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -8 }}
                            transition={{ duration: 0.15 }}
                            onMouseEnter={() => handleHover(activeCategory)}
                            className="absolute z-40 bg-white border border-gray-200 p-12 overflow-y-auto"
                            style={{
                                top: 0,
                                bottom: 0,
                                left: SIDEBAR_WIDTH + GAP,
                                right: 0,
                            }}
                        >
                            <CategoryMegaMenu category={activeCategory} />
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>

        </section>
    );
}