import { Sparkles, BaggageClaim, CreditCard, Headset } from "lucide-react";
import FooterTopContent from "./ftop-content";

const FOOTER_TOP_CONTENT = [
    {
        title: "Great Value",
        description: "We offer competitive prices on our 100 million plus product ranges",
        icon: <Sparkles size={28} strokeWidth={1.5} />
    },
    {
        title: "Nation and Worldwide Delivery",
        description: "Local and International Partnership Couriers at competitive rate",
        icon: <BaggageClaim size={28} strokeWidth={1.5} />
    },
    {
        title: "Safe Payment",
        description: "We offer competitive prices on our 100 million plus product rangess",
        icon: <CreditCard size={28} strokeWidth={1.5} />
    },
    {
        title: "24/7 Help Center",
        description: "Round-the-clock assistance for a smooth shopping experience.",
        icon: <Headset size={28} strokeWidth={1.5} />
    },
]

export default function FooterTop() {

    return (
        <div className="flex flex-row gap-8 max-w-350 mx-auto px-6 py-12 justify-between">

            {FOOTER_TOP_CONTENT.map((content, index) => (
                <FooterTopContent key={index} title={content.title} description={content.description}>
                    {content.icon}
                </FooterTopContent>
            ))}

        </div>
    )

}