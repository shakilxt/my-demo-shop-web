// import ProductCard from "./product-card";
import ProductCard from "../ui/product/product-card";
import { getProducts } from "@/lib/services/product-services";


const DUMMY_PRODUCTS = [
    {
        id: 1,
        name: 'White minimalist laptop stands with blowing fan',
        description: 'Adjustable aluminum laptop stand with a built-in cooling fan, foldable for travel.',
        category: 'Gadget',
        price: 28.99,
        original_price: 43.0, // -35%
        rating: 4.5,
        review_count: 39,
        image_url: 'https://images.unsplash.com/photo-1624258919367-5dc28f5dc293',
    },
    {
        id: 2,
        name: 'aRGB manual controlled high base gaming headphone',
        description: 'Over-ear gaming headset with customizable aRGB lighting and deep bass drivers.',
        category: 'Gadget',
        price: 45.0,
        original_price: null, // no discount
        rating: 4.5,
        review_count: 43,
        image_url: 'https://images.unsplash.com/photo-1583305727488-61f82c7eae4b',
    },
    {
        id: 3,
        name: 'HP Laptop B703 white silicon frame',
        description: '14-inch business laptop with a durable white silicon-frame chassis.',
        category: 'Electronics',
        price: 299.90,
        original_price: 460.0, // -35%
        rating: 4.3,
        review_count: 21,
        image_url: 'https://images.unsplash.com/photo-1772983069620-43a502c2784f',
    },
    {
        id: 4,
        name: '3700MAH battery with soler charging panel',
        description: 'Portable power bank with an integrated foldable solar charging panel.',
        category: 'Gadget',
        price: 58.0,
        original_price: 82.0, // -30%
        rating: 4.1,
        review_count: 15,
        image_url: 'https://images.unsplash.com/photo-1625750188088-f6cd6756349c',
    },
    {
        id: 5,
        name: 'Ergonomic mesh office chair with lumbar support',
        description: 'Breathable mesh back, adjustable armrests, and built-in lumbar support.',
        category: 'Furniture',
        price: 129.0,
        original_price: null,
        rating: 4.7,
        review_count: 58,
        image_url: 'https://images.unsplash.com/photo-1642375352724-8b523c67b8be',
    },
    {
        id: 6,
        name: 'Compact espresso machine with milk frother',
        description: '15-bar pressure pump espresso maker with a built-in steam wand.',
        category: 'Home Applications',
        price: 89.0,
        original_price: 110.0, // -19%
        rating: 4.4,
        review_count: 27,
        image_url: 'https://images.unsplash.com/photo-1731762524352-b5663f83a830',
    },
    {
        id: 7,
        name: 'White minimalist laptop stands with blowing fan',
        description: 'Adjustable aluminum laptop stand with a built-in cooling fan, foldable for travel.',
        category: 'Gadget',
        price: 28.99,
        original_price: 43.0, // -35%
        rating: 4.5,
        review_count: 39,
        image_url: 'https://images.unsplash.com/photo-1624258919367-5dc28f5dc293',
    },
    {
        id: 8,
        name: 'aRGB manual controlled high base gaming headphone',
        description: 'Over-ear gaming headset with customizable aRGB lighting and deep bass drivers.',
        category: 'Gadget',
        price: 45.0,
        original_price: null, // no discount
        rating: 4.5,
        review_count: 43,
        image_url: 'https://images.unsplash.com/photo-1583305727488-61f82c7eae4b',
    },
    {
        id: 9,
        name: 'HP Laptop B703 white silicon frame',
        description: '14-inch business laptop with a durable white silicon-frame chassis.',
        category: 'Electronics',
        price: 299.90,
        original_price: 460.0, // -35%
        rating: 4.3,
        review_count: 21,
        image_url: 'https://images.unsplash.com/photo-1772983069620-43a502c2784f',
    },
    {
        id: 10,
        name: '3700MAH battery with soler charging panel',
        description: 'Portable power bank with an integrated foldable solar charging panel.',
        category: 'Gadget',
        price: 58.0,
        original_price: 82.0, // -30%
        rating: 4.1,
        review_count: 15,
        image_url: 'https://images.unsplash.com/photo-1625750188088-f6cd6756349c',
    },
];

export async function ProductGrid() {

    const products = await getProducts();

    if (!products || products.length === 0) {
        return <div className="text-stone-500 py-10">Sorry, current no items are available in the store.</div>;
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-12.5 gap-x-7.5">
            {
                // products?.map((product, index) => (
                //     <ProductCard key={product.id} product={product} index={index} />
                // ))
                DUMMY_PRODUCTS.map((product, index) => (
                    <ProductCard key={product.id} product={product} index={index} size="lg" />
                ))
            }
        </div>
    )
    
}
