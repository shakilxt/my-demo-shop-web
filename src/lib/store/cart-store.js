'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useCartStore = create(
    persist(
        (set) => ({
            items: [],

            addItem: (product, quantity = 1) => {
                set((state) => {
                    const existing = state.items.find((item) => item.id === product.id);

                    if (existing) {
                        return {
                            items: state.items.map((item) =>
                                item.id === product.id
                                    ? { ...item, quantity: item.quantity + quantity }
                                    : item
                            ),
                        };
                    }

                    return {
                        items: [
                            ...state.items,
                            {
                                id: product.id,
                                name: product.name,
                                price: product.price,
                                image_url: product.image_url,
                                quantity,
                            },
                        ],
                    };
                });
            },

            removeItem: (id) => {
                set((state) => ({
                    items: state.items.filter((item) => item.id !== id),
                }));
            },

            updateQuantity: (id, quantity) => {
                if (quantity < 1) return;
                set((state) => ({
                    items: state.items.map((item) =>
                        item.id === id ? { ...item, quantity } : item
                    ),
                }));
            },

            clearCart: () => set({ items: [] }),
        }),
        {
            name: 'demo-shop-cart',
            skipHydration: true,
        }
    )
);

export function useCartCount() {
    return useCartStore((state) => state.items.reduce((sum, item) => sum + item.quantity, 0));
}

export function useCartTotal() {
    return useCartStore((state) =>
        state.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
    );
}