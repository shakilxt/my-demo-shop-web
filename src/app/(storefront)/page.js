import { Suspense } from 'react';
import { ProductGrid } from '@/components/storefront/home/product-grid';
import HeroSection from '@/components/storefront/home/hero/hero-section';
import { H2 } from '@/components/storefront/ui/heading';
import CategoryGrid from '@/components/storefront/ui/category/category-grid';
import MoreButton from '@/components/storefront/ui/more-button';

export default async function HomePage() {


    return (

        <main className="max-w-350 mx-auto pb-24 px-6">

            <HeroSection />

            <div className='mb-20'>

                <div className='flex items-center justify-between mb-8'>

                    <H2 className="text-orange-600">Flash Sale</H2>

                    <MoreButton text='More' link="/flash-sale" />

                </div>

                <Suspense>
                    <ProductGrid />
                </Suspense>

            </div>

            <div className='mb-20'>

                <H2>Shop by Categories</H2>

                <CategoryGrid />

            </div>


        </main>

    );
}