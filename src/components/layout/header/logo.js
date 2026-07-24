"use client";

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Logo() {

    const pathname = usePathname();

    const handleClick = (e) => {
        if (pathname === '/') {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <Link href="/" className="inline-flex w-fit shrink-0" onClick={handleClick}>
            <Image
                src="/logo.png"
                alt="Logo"
                width={200}
                height={40}
                className="w-35 object-contain"
                priority
            />
        </Link>
    );

}