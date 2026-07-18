import Link from 'next/link';
import { getMegaMenu } from '@/lib/data/categories';

export default function CategoryMegaMenu({ category }) {
    const columns = getMegaMenu(category);

    return (
        <div>
            <h3 className="text-lg font-semibold text-stone-900 mb-5">{category.name}</h3>

            <div className="grid grid-cols-4 gap-8">
                {columns.map((column) => (
                    <div key={column.title}>
                        <p className="text-sm font-semibold text-stone-900 mb-3">{column.title}</p>
                        <ul className="space-y-2">
                            {column.links.map((link) => (
                                <li key={link}>
                                    <Link
                                        href={`${category.href}?filter=${encodeURIComponent(link)}`}
                                        className="text-sm text-stone-600 hover:text-orange-600 transition-colors"
                                    >
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}