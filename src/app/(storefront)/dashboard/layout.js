import BuyerSidebar from "@/components/storefront/dashboard/buyer-sidebar";

// Dummy user for now — swap for a real fetch (e.g. getCurrentBuyer()) once
// buyer auth/session exists. This can become an async Server Component at
// that point with no structural changes needed anywhere else.
const DUMMY_USER = {
    name: "Arian Leo'ne",
    avatar_url: 'https://images.unsplash.com/photo-1740252117012-bb53ad05e370',
    verified: true,
    membershipLabel: 'Gold',
};

export default function BuyerDashboardLayout({ children }) {
    return (
        <main className="max-w-350 mx-auto px-6 py-24">

            <div className="flex gap-35 items-start">

                <BuyerSidebar user={DUMMY_USER} />

                <div className="flex-1 min-w-0">
                    {children}
                </div>

            </div>
            
        </main>
    );
}