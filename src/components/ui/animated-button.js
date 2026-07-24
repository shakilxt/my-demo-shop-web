"use client";

import { twMerge } from "tailwind-merge";
import { motion } from "motion/react";

// Login button
export default function AnimatedButton({ children, className = "", ...props }) {
    return (
        <motion.button
            layout
            className={twMerge(
                "inline-flex w-fit justify-center items-center px-16 h-13 mt-2 bg-orange-600 text-white font-semibold cursor-pointer hover:bg-orange-700 transition-colors duration-300 whitespace-nowrap overflow-hidden",
                className
            )}
            transition={{ type: "tween", duration: 0.2 }}
            {...props}
        >
            {children}
        </motion.button>
    );
}