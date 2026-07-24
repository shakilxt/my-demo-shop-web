'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';
import { ShoppingBag, Star } from 'lucide-react';
import { useCartStore } from '@/lib/store/cart-store';

export default function ProductCard({
    product,
    index,
    size = 'lg',
    showRating = size === 'lg',
    showCartIcon = size === 'lg',
}) {
    const addItem = useCartStore((state) => state.addItem);
    const [justAdded, setJustAdded] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const pathname = usePathname();
    
    const [prevPathname, setPrevPathname] = useState(pathname);
    if (pathname !== prevPathname) {        
        setPrevPathname(pathname);
        setIsHovered(false);
    }

    const isCompact = size === 'sm';

    const discountPercent =
        product.original_price && product.original_price > product.price
            ? Math.round(((product.original_price - product.price) / product.original_price) * 100)
            : null;

    function handleAddToCart(event) {
        event.preventDefault();
        event.stopPropagation();

        addItem(product, 1);
        setJustAdded(true);
        setTimeout(() => setJustAdded(false), 1200);
    }

    return (
        <Link href={`/${product.id}`} className="block h-full ">

            <motion.div
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                className="h-full flex flex-col"
            >

                <div className="relative overflow-hidden">

                    {discountPercent && (
                        <span className="absolute top-3 left-3 z-10 bg-orange-600 text-white text-xs font-semibold px-3 py-1.75 rounded-full">
                            -{discountPercent}%
                        </span>
                    )}

                    <Image
                        src={product.image_url}
                        alt={product.name}
                        width={800}
                        height={800}
                        className="w-full object-cover aspect-square"
                        priority={index < 4}
                    />

                    <motion.button
                        type="button"
                        onClick={handleAddToCart}
                        animate={isHovered ? 'hover' : 'rest'}
                        initial="rest"
                        variants={{ rest: { y: '100%' }, hover: { y: '0%' } }}
                        transition={{ type: 'spring', stiffness: 400, damping: 36 }}
                        className={`absolute inset-x-0 bottom-0 bg-orange-600 text-white font-semibold text-base py-4 flex items-center justify-center gap-2 cursor-pointer 
                            ${isCompact ? 'text-sm font-bold' : ''}`}
                    >
                        {showCartIcon && <ShoppingBag size={16} />}
                        {justAdded ? 'Added ✓' : 'Add to Cart'}
                    </motion.button>

                </div>

                <div className="flex flex-col grow gap-4 pt-4">

                    <div className="flex items-center justify-between gap-2">
                        {product.category && (
                            <span className="text-xs font-semibold text-stone-400 uppercase tracking-wide">
                                {product.category}
                            </span>
                        )}

                        {showRating && product.rating && (
                            <span className="flex font-semibold items-center gap-1 text-xs text-stone-400 shrink-0">
                                <span className="text-orange-400">{product.rating}</span>
                                <Star size={12} className="fill-orange-400 text-orange-400" />
                                {product.review_count} {product.review_count === 1 ? 'review' : 'reviews'}
                            </span>
                        )}
                    </div>

                    <h3 className="font-bold text-base/tight text-stone-900 line-clamp-2">
                        {product.name}
                    </h3>

                    <p className={`font-bold text-orange-600 mt-auto ${isCompact ? 'text-sm' : 'text-base'}`}>
                        ${product.price}
                    </p>

                </div>

            </motion.div>
        </Link>
    );
}