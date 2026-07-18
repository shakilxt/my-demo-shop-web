import Link from "next/link";
import {
    TbBrandFacebook,
    TbBrandInstagram,
    TbBrandTiktok,
    TbBrandYoutube,
} from "react-icons/tb";

const SOCIAL_LINKS = [
    { label: "Facebook", icon: TbBrandFacebook },
    { label: "Instagram", icon: TbBrandInstagram },
    { label: "TikTok", icon: TbBrandTiktok },
    { label: "YouTube", icon: TbBrandYoutube },
];

export default function FooterSocialLinks() {
    return (
        <div className="flex items-center gap-4 text-gray-900">
            {SOCIAL_LINKS.map(({ label, icon: Icon }) => (
                <Link
                    key={label}
                    href="#"
                    aria-label={label}
                    className="hover:text-orange-600 transition-colors"
                >
                    <Icon className="size-5" />
                </Link>
            ))}
        </div>
    );
}