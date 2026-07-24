import { MoveRight } from "lucide-react";
import { twMerge } from "tailwind-merge";
import Link from "next/link";

export default function MoreButton({
    text = 'More',
    link = '#',
    hasBorder = true,
    type = 'button',
    className = '',
    isIcon = true,
    ...props
}) {
    return (
        <Link href={link}
            className={twMerge(`inline-flex items-center justify-center gap-4 px-8 py-3.5
                font-bold text-gray-900 transition-all duration-300 group
                ${hasBorder ? 'border border-gray-300' : ''} hover:border-gray-900 cursor-pointer`, className)}
            {...props}
        >
            <span>{text}</span>
            {isIcon && (
                <MoveRight
                    strokeWidth={1.5}
                    className="size-5.5 transition-transform duration-300 group-hover:translate-x-1"
                />
            )}
        </Link>
    );
}