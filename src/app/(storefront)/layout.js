import ClientHeader from "@/components/storefront/home/client-header";

export default function ClientLayout({ children }) {
    return (
        <div className="bg-white">
            {/* <ClientHeader /> */}

            {children}
        </div>
    );
}