import { FACILITIES } from "@/lib/data/new-account-facilities";
import FacilityItem from "./facility-item";
import { H3 } from "@/components/storefront/ui/heading";
import { P1 } from "@/components/storefront/ui/paragraph";
import MoreButton from "@/components/storefront/ui/more-button";

export default function Facilities({ className, ...props }) {
    return (
        <div className="max-w-100 bg-gray-100 p-10 flex flex-col justify-between h-full">

            <div>
                <H3>New to SellsBuy?</H3>

                <P1>Create an  account. And enjoy a better shopping experience.</P1>

                <div className={`grid grid-cols-2 lg:grid-cols-1 gap-6 ${className}`} {...props}>
                    {FACILITIES.map((facility, index) => (
                        <FacilityItem
                            key={index}
                            facility={facility}
                        />
                    ))}
                </div>
            </div>

            <MoreButton text="Create an Account" link="/register" isIcon={false} className="mt-10 border-gray-900 hover:border-gray-300" />

        </div>
    )
}