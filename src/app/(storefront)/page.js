import { Suspense } from 'react';
import { ProductGrid } from '@/components/storefront/home/product-grid';
import HeroSection from '@/components/storefront/home/hero/hero-section';
import FooterSection from '@/components/layout/footer/footer-section';

export default async function HomePage() {

    return (

        <div className='bg-white min-h-screen'>

            <HeroSection />

            <main className="max-w-350 mx-auto py-24">

                <h1 className="text-3xl font-bold mb-8 ms-6 text-gray-900">Latest Arrivals</h1>

                <Suspense>
                    <div className='px-6'>
                        <ProductGrid />
                    </div>
                </Suspense>


            </main>

        </div>
    );
}