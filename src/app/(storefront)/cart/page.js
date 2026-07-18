'use client';

import Link from 'next/link';
import { useCartStore, useCartTotal } from '@/lib/store/cart-store';
import CartItem from '@/components/storefront/cart/cart-item';
import EmptyCart from '@/components/storefront/cart/empty-cart';

export default function CartPage() {
    const items = useCartStore((state) => state.items);
    const total = useCartTotal();

    if (items.length === 0) {
        return (
            <EmptyCart />
        );
    }

    return (
        <main className="max-w-6xl mx-auto p-4 md:p-8 bg-stone-50">

            <h1 className="text-3xl font-bold text-stone-900 mb-8">Your Cart</h1>

            <div className="bg-white border border-stone-200 rounded-2xl px-4 md:px-6">
                {items.map((item) => (
                    <CartItem key={item.id} item={item} />
                ))}
            </div>

            <div className="mt-8 flex items-center justify-between">
                <span className="text-lg text-stone-600">Total</span>
                <span className="text-2xl font-bold text-stone-900">${total.toFixed(2)}</span>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Link
                    href="/"
                    className="flex-1 text-center border border-stone-300 text-stone-900 px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors font-semibold"
                >
                    Continue Shopping
                </Link>
                <button
                    type="button"
                    disabled
                    title="Checkout isn't built yet"
                    className="flex-1 bg-black text-white px-6 py-3 rounded-lg font-semibold opacity-50 cursor-not-allowed"
                >
                    Proceed to Checkout
                </button>
            </div>
            
        </main>
    );
}