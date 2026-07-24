import CategoryCard from './category-card';

const DUMMY_CATEGORIES = [
    { id: 1, name: 'Agriculture', slug: 'agriculture', item_count: 1692, image_url: 'https://images.unsplash.com/photo-1684154739620-ef7b1e078d4d' },
    { id: 2, name: 'Apparel', slug: 'apparel', item_count: 3700, image_url: 'https://images.unsplash.com/photo-1523381294911-8d3cead13475' },
    { id: 3, name: 'Beauty & Personal Care', slug: 'beauty-personal-care', item_count: 2860, image_url: 'https://images.unsplash.com/photo-1784098480775-54c1be00b6e6' },
    { id: 4, name: 'Consumer Electronics', slug: 'consumer-electronics', item_count: 2790, image_url: 'https://images.unsplash.com/photo-1498049794561-7780e7231661' },
    { id: 5, name: 'Electrical Equipment', slug: 'electrical-equipment', item_count: 3982, image_url: 'https://images.unsplash.com/photo-1780034766312-73825064806c' },
    { id: 6, name: 'Furniture', slug: 'furniture', item_count: 1939, image_url: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7' },
    { id: 7, name: 'Headphone', slug: 'headphone', item_count: 936, image_url: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b' },
    { id: 8, name: 'Gadgets', slug: 'gadgets', item_count: 1290, image_url: 'https://images.unsplash.com/photo-1558089687-f282ffcbc126' },
    { id: 9, name: 'Pet Supplies', slug: 'pet-supplies', item_count: 328, image_url: 'https://images.unsplash.com/photo-1597843786411-a7fa8ad44a95' },
    { id: 10, name: 'Kitchen', slug: 'kitchen', item_count: 4722, image_url: 'https://images.unsplash.com/photo-1556909211-36987daf7b4d' },
    { id: 11, name: 'Rooftop Items', slug: 'rooftop-items', item_count: 628, image_url: 'https://images.unsplash.com/photo-1564558359032-33983c24e76b' },
    { id: 12, name: 'Console Game', slug: 'console-game', item_count: 387, image_url: 'https://images.unsplash.com/photo-1507457379470-08b800bebc67' },
];

export default function CategoryGrid() {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-y-12.5 gap-x-7.5">
            {DUMMY_CATEGORIES.map((category, index) => (
                <CategoryCard key={category.id} category={category} index={index} />
            ))}
        </div>
    );
}