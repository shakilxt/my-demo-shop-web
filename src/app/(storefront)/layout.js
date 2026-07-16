import ClientHeader from "@/components/storefront/home/client-header";

export default function ClientLayout({ children }) {
    return (
        <>
            <ClientHeader />

            {children}
        </>
    );
}