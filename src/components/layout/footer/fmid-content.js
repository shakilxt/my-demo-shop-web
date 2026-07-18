import Link from "next/link";
import { TbBrandFacebook, TbBrandInstagram, TbBrandTiktok, TbBrandYoutube } from 'react-icons/tb';
import Logo from "../header/logo";
import NewsLetter from "./news-letter";
import FooterNavs from "./footer-navs";

const FOOTER_NAV = [
    {
        title: 'CUSTOMER SERVICE',
        links: [
            { name: 'Help Center', href: '/help' },
            { name: 'How to Buy', href: '/how-to-buy' },
            { name: 'How to Sell', href: '/how-to-sell' },
            { name: 'Return & Refunds', href: '/returns' },
            { name: 'Track Your Order', href: '/track-order' },
        ],
    },
    {
        title: 'COMPANY',
        links: [
            { name: 'About Us', href: '/about' },
            { name: 'Career', href: '/career' },
            { name: 'Contact Us', href: '/contact' },
            { name: 'News & Articles', href: '/blog' },
            { name: 'Sitemap', href: '/sitemap' },
        ],
    },
    {
        title: 'POLICIES',
        links: [
            { name: 'Privacy Policy', href: '/privacy' },
            { name: 'Terms & Conditions', href: '/terms' },
            { name: 'Refund Policy', href: '/refund-policy' },
            { name: 'Cookie Policy', href: '/cookie-policy' },
        ],
    },
];

export default function FooterMidContent() {
    return (
        <>
            <div className="col-span-2">
                
                <Logo />

                <p className="text-gray-700 leading-relaxed my-6 max-w-sm">
                    Laos&apos; primary ethical marketplace, linking traditional weavers, tea harvesters, and organic soap crafters straight with global households.
                </p>

                <div className="flex items-center gap-4 text-gray-900">
                    <Link href="#" aria-label="Facebook" className="hover:text-[#E8501E] transition-colors"><TbBrandFacebook /></Link>
                    <Link href="#" aria-label="Instagram" className="hover:text-[#E8501E] transition-colors"><TbBrandInstagram /></Link>
                    <Link href="#" aria-label="TikTok" className="hover:text-[#E8501E] transition-colors"><TbBrandTiktok /></Link>
                    <Link href="#" aria-label="YouTube" className="hover:text-[#E8501E] transition-colors"><TbBrandYoutube /></Link>
                </div>

            </div>

            {FOOTER_NAV.map((section) => (
                <FooterNavs key={section.title} section={section} />
            ))}

            <NewsLetter />
        </>
    )
}