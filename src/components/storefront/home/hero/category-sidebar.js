import { ChevronRight, LayoutPanelLeft } from 'lucide-react';
import { CATEGORIES } from '@/lib/data/categories';

export default function CategorySidebar({ activeCategory, onHoverCategory }) {
    return (
        <div className="w-75 shrink-0 bg-white border border-gray-100 overflow-hidden">

            <div className="bg-orange-600 text-white px-4 py-3 flex items-center gap-3 font-semibold">
                <LayoutPanelLeft size={18} />
                Shop Categories
            </div>

            <ul>
                {CATEGORIES.map((category) => {
                    const isActive = activeCategory?.slug === category.slug;

                    return (
                        <li key={category.slug}>
                            <a
                                href={category.href}
                                onMouseEnter={() => onHoverCategory(category)}
                                onFocus={() => onHoverCategory(category)}
                                className={`flex items-center justify-between gap-3 px-4 py-3 text-sm border-b border-gray-100 last:border-b-0 transition-colors ${
                                    isActive
                                        ? 'bg-stone-50 text-orange-600 font-medium'
                                        : 'text-stone-700 hover:bg-stone-50'
                                }`}
                            >
                                <span className="flex items-center gap-3">
                                    <category.icon size={18} strokeWidth={1.75} />
                                    {category.name}
                                </span>
                                <ChevronRight size={16} className={isActive ? 'text-orange-400' : 'text-stone-400'} />
                            </a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}