import { twMerge } from "tailwind-merge"

export function H2({ children, className, ...props }) {
    return <h2 className={twMerge("text-[22px] font-extrabold mb-8.5 text-gray-900", className)} {...props}>{children}</h2>
}

export function H3({ children, className, ...props }) {
    return <h3 className={twMerge("text-[17px] font-bold mb-3 text-gray-900", className)} {...props}>{children}</h3>
}