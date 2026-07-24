import BuyerLoginForm from "@/components/storefront/buyer-auth/login/buyer-login-form";
import Facilities from "@/components/storefront/buyer-login/facilities";

export default function BuyerLoginPage() {
    return (
        <main className="max-w-350 mx-auto pb-24 px-6">

            <div className="max-w-5xl mx-auto flex lg:grid-cols-2 gap-8 pt-12">

                <BuyerLoginForm />

                <Facilities />

            </div>

        </main>
    )
}