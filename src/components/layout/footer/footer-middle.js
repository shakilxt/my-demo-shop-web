import Logo from "../header/logo";
import NewsLetter from "./news-letter";
import FooterNavs from "./footer-navs";
import FooterSocialLinks from "./footer-social-links";

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


export default function FooterMiddle() {
    return (
        <footer className="bg-white">

            <div className="max-w-350 mx-auto px-6 py-12 grid grid-cols-12 gap-10">

                <div className="col-span-3">

                    <Logo />

                    <p className="text-gray-700 leading-relaxed my-6">
                        Laos&apos; primary ethical marketplace, linking traditional weavers, tea harvesters, and organic soap crafters straight with global households.
                    </p>

                    <FooterSocialLinks />

                </div>

                {FOOTER_NAV.map((section) => (
                    <FooterNavs key={section.title} section={section} />
                ))}

                <div className="col-span-3">
                    <NewsLetter />
                </div>

            </div>

        </footer>
    );
}