import { motion, AnimatePresence } from "motion/react";
import { twMerge } from "tailwind-merge";

export default function AnimatedNavIcon({ 
    isActive, 
    icon: Icon, 
    activeIcon: ActiveIcon, 
    className 
}) {
    return (
        <div className={twMerge("relative flex items-center justify-center size-5.5 shrink-0", className)}>
            <AnimatePresence initial={false}>
                {isActive && ActiveIcon ? (
                    <motion.div
                        key="active-icon"
                        className="absolute inset-0 flex items-center justify-center z-10"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, transition: { duration: 0 } }}
                        transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    >
                        <ActiveIcon className="size-full text-orange-600" />
                    </motion.div>
                ) : (
                    <motion.div
                        key="outline-icon"
                        className="absolute inset-0 flex items-center justify-center z-0"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, transition: { delay: 0.15, duration: 0 } }}
                        transition={{ duration: 0 }}
                    >
                        <Icon className="size-full" strokeWidth={1.5} />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}