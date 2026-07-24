import Link from 'next/link';
import { IconShoppingBag } from '@tabler/icons-react';

export default function CartButton({ total = '0.00' }) {
    return (
        <Link
            href="/cart"
            className="flex items-center gap-2 border border-stone-200 rounded-full px-10 py-3 hover:border-gray-900 transition-colors shrink-0"
        >
            <IconShoppingBag stroke={1} className="size-8 text-stone-900" />

            <div className="leading-tight text-left">
                <p className="text-xs font-medium text-gray-900">My Cart</p>
                <p className="text-base font-semibold text-gray-900">${total}</p>
            </div>
        </Link>
    );
}