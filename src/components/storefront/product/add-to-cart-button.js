'use client';

import { useState } from 'react';
import { useCartStore } from '@/lib/store/cart-store';
import QuantityStepper from '../cart/quantity-stepper';

export default function AddToCartButton({ product }) {
    const addItem = useCartStore((state) => state.addItem);
    const [quantity, setQuantity] = useState(1);
    const [justAdded, setJustAdded] = useState(false);

    function handleAddToCart() {
        addItem(product, quantity);
        setJustAdded(true);
        setTimeout(() => setJustAdded(false), 1500);
    }

    return (
        <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center">
            <QuantityStepper
                quantity={quantity}
                onDecrease={() => setQuantity((current) => Math.max(1, current - 1))}
                onIncrease={() => setQuantity((current) => current + 1)}
            />

            <button
                type="button"
                onClick={handleAddToCart}
                className="w-full rounded-lg bg-black px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-gray-800 sm:w-64"
            >
                {justAdded ? 'Added ✓' : 'Add to Cart'}
            </button>
        </div>
    );
}