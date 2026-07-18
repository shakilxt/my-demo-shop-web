import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
    return (
        <Link href="/" className="inline-flex w-fit shrink-0">
            <Image
                src="/logo.png"
                alt="Logo"
                width={200}
                height={40}
                className="h-auto w-auto object-contain"
                priority
            />
        </Link>
    );
}