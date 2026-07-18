import Link from 'next/link';
import { ShoppingBag } from 'lucide-react';

export default function CartButton({ total = '0.00' }) {
    return (
        <Link
            href="/cart"
            className="flex items-center gap-2 border border-stone-200 rounded-full px-12 py-4 hover:border-gray-900 transition-colors shrink-0"
        >
            <ShoppingBag size={24} strokeWidth={1.75} className="text-stone-900" />
            <div className="leading-tight text-left">
                <p className="text-xs text-stone-900">My Cart</p>
                <p className="text-base font-semibold text-stone-900">${total}</p>
            </div>
        </Link>
    );
}