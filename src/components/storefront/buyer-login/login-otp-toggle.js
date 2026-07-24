"use client";

import { motion } from "motion/react";

export default function LoginOtpToggle({ activeTab, onChange }) {
    return (
        <div className="flex border-b border-gray-200 mb-8.5 gap-6">
            {["login", "otp"].map((tab) => (
                <button
                    key={tab}
                    onClick={() => onChange(tab)}
                    className={`relative pb-3 text-base font-semibold transition-colors cursor-pointer ${
                        activeTab === tab
                            ? "text-[#df5b25]"
                            : "text-gray-500 hover:text-gray-800"
                    }`}
                >
                    {tab === "login" ? "Login" : "Login with OTP"}
                    
                    {activeTab === tab && (
                        <motion.div
                            layoutId="tab-indicator"
                            className="absolute -bottom-px left-0 right-0 h-0.5 bg-[#df5b25]"
                            initial={false}
                            transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 30,
                            }}
                        />
                    )}
                </button>
            ))}
        </div>
    );
}