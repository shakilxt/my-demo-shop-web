import {
    IconCategory,
    IconPlant,
    IconShirt,
    IconPerfume,
    IconFridge,
    IconLamp,
    IconDeviceTvOld,
    IconArmchair,
    IconGift,
    IconHome,
    IconPaw

} from '@tabler/icons-react';

const RICH_MEGA_MENUS = {
    'beauty-personal-care': [
        { title: 'Skincare', links: ['Cleansers', 'Moisturizers', 'Sunscreen', 'Serums'] },
        { title: 'Makeup', links: ['Face', 'Eyes', 'Lips', 'Makeup tools'] },
        { title: 'Hair care', links: ['Shampoo', 'Conditioner', 'Styling', 'Hair tools'] },
        { title: 'Personal care', links: ['Oral care', 'Bath & body', 'Men\u2019s grooming', 'Fragrance'] },
    ],
    'furniture': [
        { title: 'Living room', links: ['Sofas', 'Coffee tables', 'TV stands', 'Armchairs'] },
        { title: 'Bedroom', links: ['Beds', 'Wardrobes', 'Nightstands', 'Dressers'] },
        { title: 'Office', links: ['Desks', 'Office chairs', 'Bookshelves', 'Filing cabinets'] },
        { title: 'Outdoor', links: ['Patio sets', 'Garden benches', 'Umbrellas', 'Loungers'] },
    ],
    'electronics': [
        { title: 'Audio', links: ['Headphones', 'Speakers', 'Soundbars', 'Earbuds'] },
        { title: 'Computing', links: ['Laptops', 'Monitors', 'Keyboards', 'Storage'] },
        { title: 'Mobile', links: ['Smartphones', 'Tablets', 'Chargers', 'Cases'] },
        { title: 'Smart home', links: ['Smart lighting', 'Cameras', 'Speakers', 'Plugs'] },
    ],
};

export const CATEGORIES = [
    { slug: 'categories', name: '', icon: IconCategory, href: '' },
    { slug: 'agriculture', name: 'Agriculture', icon: IconPlant, href: '/categories/agriculture' },
    { slug: 'apparel', name: 'Apparel', icon: IconShirt, href: '/categories/apparel' },
    { slug: 'beauty-personal-care', name: 'Beauty & Personal Care', icon: IconPerfume, href: '/categories/beauty-personal-care' },
    { slug: 'consumer-electronics', name: 'Consumer Electronics', icon: IconFridge, href: '/categories/consumer-electronics' },
    { slug: 'electrical-equipment', name: 'Electrical Equipment', icon: IconLamp, href: '/categories/electrical-equipment' },
    { slug: 'electronics', name: 'Electronics', icon: IconDeviceTvOld, href: '/categories/electronics' },
    { slug: 'furniture', name: 'Furniture', icon: IconArmchair, href: '/categories/furniture' },
    { slug: 'handicrafts-gifts', name: 'Handicrafts & Gifts', icon: IconGift, href: '/categories/handicrafts-gifts' },
    { slug: 'home-applications', name: 'Home Applications', icon: IconHome, href: '/categories/home-applications' },
    { slug: 'pet-accessories-foods', name: 'Pet Accessories & Pet Foods', icon: IconPaw, href: '/categories/pet-accessories-foods' },
];

export function getMegaMenu(category) {
    return (
        RICH_MEGA_MENUS[category.slug] ?? [
            {
                title: `Popular in ${category.name}`,
                links: ['Best sellers', 'New arrivals', 'Top rated', `All ${category.name}`],
            },
        ]
    );
}