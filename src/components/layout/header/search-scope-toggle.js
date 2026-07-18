'use client';

import { useState } from 'react';
import { motion } from 'motion/react';

const OPTIONS = ['Products', 'Companies'];

export default function SearchScopeToggle({ value, onChange }) {
    const [internalValue, setInternalValue] = useState(value ?? 'Products');
    const active = value ?? internalValue;

    function handleSelect(option) {
        setInternalValue(option);
        onChange?.(option);
    }

    return (
        <div className="relative flex bg-gray-200 rounded-full my-1.75 p-0.75 shrink-0">

            {OPTIONS.map((option) => (
                <button
                    key={option}
                    type="button"
                    onClick={() => handleSelect(option)}
                    className="relative h-10 z-10 px-3 text-sm font-semibold rounded-full transition-colors"
                    style={{ color: active === option ? '#1c1917' : '#78716c' }}
                >
                    {option}
                    {active === option && (
                        <motion.span
                            layoutId="search-scope-pill"
                            className="absolute inset-0 bg-white rounded-full -z-10"
                            transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                        />
                    )}
                </button>
            ))}

        </div>
    );
}