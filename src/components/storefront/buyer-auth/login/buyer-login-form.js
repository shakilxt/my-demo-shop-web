"use client";

import { useState } from "react";
import LoginOtpToggle from "@/components/storefront/buyer-login/login-otp-toggle";
import OrContinueWith from "@/components/storefront/buyer-login/or-continue-with";
import AnimatedButton from "@/components/ui/animated-button";
import Input from "@/components/ui/input";
import { H2 } from "@/components/storefront/ui/heading";
import { P1 } from "@/components/storefront/ui/paragraph";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";

export default function BuyerLoginForm() {

    const [activeTab, setActiveTab] = useState("login");

    return (
        <div className="flex flex-col flex-1 border border-gray-200 py-10 px-16">

            <H2 className="mb-2">Welcome Back!</H2>

            <P1 className='text-gray-500'>Login to your SellsBuy account</P1>

            <LoginOtpToggle
                activeTab={activeTab}
                onChange={setActiveTab}
            />

            <div className="flex flex-col gap-5">

                <div>
                    <Input
                        name="email"
                        type="email"
                        label="Email or Phone Number"
                        autoComplete="email"
                    />

                    <AnimatePresence initial={false}>
                        {activeTab === "login" && (
                            <motion.div
                                key="password-field"
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ type: "spring", bounce: 0, duration: 0.3 }}
                            >
                                <div className="pt-5">
                                    <Input
                                        name="password"
                                        type="password"
                                        label="Password"
                                        autoComplete="current-password"
                                    />
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <AnimatedButton>
                    {activeTab === "login" ? "Login" : "Send OTP"}
                </AnimatedButton>

                <OrContinueWith />

                <p className="text-gray-500 text-sm font-semibold text-center">
                    Don&apos;t have an account? <Link href="/register" replace className="text-orange-600 hover:underline">Register Now</Link>
                </p>

            </div>

        </div>
    );
}