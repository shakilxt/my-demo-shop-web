import BuyerRegisterForm from "@/components/storefront/buyer-auth/register/buyer-register-form";

export default function BuyerRegisterPage() {
    return (
        <main className="max-w-350 mx-auto pb-24 px-6">

            <div className="max-w-5xl mx-auto flex lg:grid-cols-2 gap-8 py-12">

                <BuyerRegisterForm />

            </div>

        </main>
    )
}