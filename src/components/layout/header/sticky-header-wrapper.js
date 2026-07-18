'use client';

import { useRef, useState } from 'react';
import { motion, useAnimationControls, useMotionValueEvent, useScroll } from 'motion/react';

export default function StickyHeaderWrapper({ utilityBar, mainHeader }) {
    const controls = useAnimationControls();
    const isAtTop = useRef(true);
    const [isScrolled, setIsScrolled] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, 'change', (latest) => {
        const atTop = latest <= 4;
        if (atTop !== isAtTop.current) {
            isAtTop.current = atTop;
            setIsScrolled(!atTop);
            controls.start(atTop ? 'visible' : 'hidden');
        }
    });

    return (
        <div className={`sticky top-0 z-50 bg-white ${isScrolled ? 'border-b border-gray-200' : ''}`}>
            <motion.div
                initial="visible"
                animate={controls}
                variants={{
                    visible: { height: 'auto' },
                    hidden: { height: 0 },
                }}
                transition={{ type: 'spring', stiffness: 400, damping: 40 }}
                style={{ overflow: 'hidden' }}
            >
                {utilityBar}
            </motion.div>

            {mainHeader}
        </div>
    );
}