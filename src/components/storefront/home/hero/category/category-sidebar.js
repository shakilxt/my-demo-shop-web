import {
    IconCategory,
    IconChevronRight,
} from '@tabler/icons-react';
import { CATEGORIES } from '@/lib/data/categories';
import Link from 'next/link';

export default function CategorySidebar({ activeCategory, onHoverCategory }) {
    return (
        <div className="w-75 shrink-0 bg-white border border-gray-100 overflow-hidden">

            <ul>
                {CATEGORIES.map((category, index) => {
                    const isActive = activeCategory?.slug === category.slug;

                    return (

                        category.slug !== 'categories' ? (
                            <li key={category.slug}>
                                <a
                                    href={category.href}
                                    onMouseEnter={() => onHoverCategory(category)}
                                    onFocus={() => onHoverCategory(category)}
                                    className={`flex items-center justify-between gap-3 px-4 py-3.5 font-semibold text-gray-900 text-sm transition-colors ${isActive
                                        ? 'bg-gray-100 text-orange-600'
                                        : 'hover:bg-gray-50'
                                        }`}
                                >

                                    <span className="flex items-center gap-3">
                                        <category.icon stroke={1.5} className='size-5.5' />
                                        {category.name}
                                    </span>

                                    <IconChevronRight stroke={1.5} className={`size-5.5 ${isActive ? 'text-orange-600' : 'text-stone-400'}`} />

                                </a>
                            </li>
                        ) : (
                            <Link
                                key={category.slug}
                                href='/categories'
                                onMouseEnter={() => onHoverCategory(category)}
                                onFocus={() => onHoverCategory(category)}
                                className="flex items-center justify-between bg-orange-600 text-white px-4 py-3.5 gap-3 font-semibold group"
                            >

                                <div className='flex flex-1 items-center gap-3'>
                                    <IconCategory stroke={1.5} className='size-5.5' />
                                    Shop Categories
                                </div>

                                <IconChevronRight stroke={1.5} className={`size-5.5 text-orange-600 group-hover:text-white`} />

                            </Link>
                        )

                    );
                })}
            </ul>
        </div>
    );
}