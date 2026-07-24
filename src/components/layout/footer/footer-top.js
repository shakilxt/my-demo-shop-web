import { IconStars, IconTruckLoading, IconCreditCard, IconHeadphones } from "@tabler/icons-react";
import FooterTopContent from "./ftop-content";

const FOOTER_TOP_CONTENT = [
    {
        title: "Great Value",
        description: "We offer competitive prices on our 100 million plus product ranges",
        icon: IconStars
    },
    {
        title: "Nation and Worldwide Delivery",
        description: "Local and International Partnership Couriers at competitive rate",
        icon: IconTruckLoading
    },
    {
        title: "Safe Payment",
        description: "We offer competitive prices on our 100 million plus product rangess",
        icon: IconCreditCard
    },
    {
        title: "24/7 Help Center",
        description: "Round-the-clock assistance for a smooth shopping experience.",
        icon: IconHeadphones
    },
]

export default function FooterTop() {

    return (
        <div className="flex flex-row gap-8 max-w-350 mx-auto px-6 py-12 justify-between">

            {FOOTER_TOP_CONTENT.map((content, index) => (
                <FooterTopContent key={index} icon={content.icon} title={content.title} description={content.description} />
            ))}

        </div>
    )

}