import Link from "next/link"

export default function FooterNav({ link }) {
    return (
        <li>
            <Link
                href={link.href}
                className="text-gray-900 font-semibold text-sm hover:text-[#E8501E] transition-colors"
            >
                {link.name}
            </Link>
        </li>
    )
}