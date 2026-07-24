"use client";

import { useState } from "react";
import OrContinueWith from "@/components/storefront/buyer-login/or-continue-with";
import AnimatedButton from "@/components/ui/animated-button";
import Input from "@/components/ui/input";
import { H2 } from "@/components/storefront/ui/heading";
import { P1 } from "@/components/storefront/ui/paragraph";
import Link from "next/link";

export default function BuyerRegisterForm() {

    const [activeTab, setActiveTab] = useState("login");

    return (
        <div className="flex flex-col flex-1 border border-gray-200 py-10 px-16">

            <H2 className="mb-2">Create an Account</H2>

            <P1 className='text-gray-500'>Register for a new SellsBuy account</P1>

            {/* <LoginOtpToggle
                activeTab={activeTab}
                onChange={setActiveTab}
            /> */}

            <div className="flex flex-col gap-5">

                <div className="grid grid-cols-2 gap-5">
                    <Input
                        name='firstName'
                        type='text'
                        label='First Name'
                        autoComplete='given-name'
                    />
                    <Input
                        name='lastName'
                        type='text'
                        label='Last Name'
                        autoComplete='family-name'
                    />
                </div>

                <Input
                    name="email"
                    type="email"
                    label="Email Address"
                    autoComplete="email"
                />

                <Input
                    name="password"
                    type="password"
                    label="Password"
                    autoComplete="new-password"
                />

                <Input
                    name="confirmPassword"
                    type="password"
                    label="Confirm Password"
                    autoComplete="new-password"
                />

                <AnimatedButton>
                    Register
                </AnimatedButton>

                <OrContinueWith />

                <p className="text-gray-500 text-sm font-semibold text-center">
                    Already have an account? <Link href="/login" replace className="text-orange-600 hover:underline">Sign In</Link>
                </p>

            </div>

        </div>
    );
}