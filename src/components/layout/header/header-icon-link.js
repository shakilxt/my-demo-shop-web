import Link from 'next/link';

export default function HeaderIconLink({ href, icon: Icon, label, badge }) {
    return (
        <Link
            href={href}
            className="relative flex flex-col items-center gap-1.5 text-gray-900 group"
        >

            <Icon stroke={1.5} className="size-5.5" />

            <span className="text-xs group-hover:underline group-hover:underline-offset-1">{label}</span>

            {badge > 0 && (
                <span className="absolute -top-1 -right-2 min-w-4 h-4 px-1 flex items-center justify-center rounded-full bg-orange-500 text-white text-[10px] font-semibold">
                    {badge}
                </span>
            )}
        </Link>
    );
}