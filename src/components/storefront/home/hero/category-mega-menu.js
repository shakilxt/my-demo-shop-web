import Link from 'next/link';
import { getMegaMenu } from '@/lib/data/categories';
import { H3 } from '../../ui/heading';

export default function CategoryMegaMenu({ category }) {
    const columns = getMegaMenu(category);

    return (
        <div>

            <H3 className="mb-5">{category.name}</H3>

            <div className="grid grid-cols-4 gap-8">
                {columns.map((column) => (
                    <div key={column.title}>

                        <p className="font-bold text-gray-900 mb-3">{column.title}</p>

                        <ul className="space-y-2">
                            {column.links.map((link) => (
                                <li key={link}>
                                    <Link
                                        href={`${category.href}?filter=${encodeURIComponent(link)}`}
                                        className="text-sm font-medium text-gray-900 hover:text-orange-600 transition-colors"
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