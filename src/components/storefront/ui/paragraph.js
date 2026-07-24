import { twMerge } from "tailwind-merge"

export function P1({ children, className, ...props }) {
    return <p className={twMerge("text-base font-normal mb-8.5 text-gray-900", className)} {...props}>{children}</p>
}