'use client';

import Image from 'next/image';
import { useCartStore } from '@/lib/store/cart-store';
import QuantityStepper from './quantity-stepper';

export default function CartItem({ item }) {
    const updateQuantity = useCartStore((state) => state.updateQuantity);
    const removeItem = useCartStore((state) => state.removeItem);

    const lineTotal = (item.price * item.quantity).toFixed(2);

    return (
        <div className="flex flex-col gap-3 py-4 border-b border-stone-100 last:border-b-0 sm:flex-row sm:items-center sm:gap-4">

            <div className="flex items-start gap-3 sm:flex-1 sm:min-w-0">
                <Image
                    src={item.image_url}
                    alt={item.name}
                    width={80}
                    height={80}
                    priority
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg object-cover bg-stone-100 shrink-0"
                />

                <div className="min-w-0 flex-1">
                    <p className="font-medium text-sm sm:text-base text-stone-900 line-clamp-3">{item.name}</p>
                    <p className="text-sm text-stone-500">${item.price}</p>
                </div>

                <button
                    type="button"
                    onClick={() => removeItem(item.id)}
                    className="text-stone-400 hover:text-red-600 transition-colors sm:hidden"
                    aria-label={`Remove ${item.name} from cart`}
                >
                    ✕
                </button>
            </div>

            <div className="flex items-center justify-between sm:justify-end sm:gap-6">
                <QuantityStepper
                    quantity={item.quantity}
                    onDecrease={() =>
                        item.quantity === 1
                            ? removeItem(item.id)
                            : updateQuantity(item.id, item.quantity - 1)
                    }
                    onIncrease={() => updateQuantity(item.id, item.quantity + 1)}
                />

                <p className="w-20 text-right font-semibold text-stone-900">
                    ${lineTotal}
                </p>

                <button
                    type="button"
                    onClick={() => removeItem(item.id)}
                    className="hidden text-stone-400 hover:text-red-600 transition-colors sm:inline-block"
                    aria-label={`Remove ${item.name} from cart`}
                >
                    ✕
                </button>
            </div>
        </div>
    );
}