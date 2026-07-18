import FooterNav from "./footer-nav";

export default function FooterNavs({ section }) {
    return (
        <div className="col-span-2">
            
            <h3 className="text-gray-400 font-semibold tracking-widest text-sm mb-6 uppercase">
                {section.title}
            </h3>

            <ul className="space-y-3">
                {section.links.map((link) => (
                    <FooterNav key={link.name} link={link} />
                ))}
            </ul>

        </div>
    )
}