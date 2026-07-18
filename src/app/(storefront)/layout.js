import ClientHeader from "@/components/storefront/home/client-header";

export default function ClientLayout({ children }) {
    return (
        <div className="min-h-screen bg-stone-50">
            {/* <ClientHeader /> */}

            {children}
        </div>
    );
}