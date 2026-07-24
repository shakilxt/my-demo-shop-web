'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';

export default function CategoryCard({ category, index }) {
    return (
        <Link href={`/categories/${category.slug}`} className="block group">

            <div className="relative rounded-3xl overflow-hidden">
                <motion.div
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                >
                    <Image
                        src={category.image_url}
                        alt={category.name}
                        width={400}
                        height={300}
                        className="w-full aspect-16/11 object-cover"
                        priority={index < 6}
                    />
                </motion.div>
            </div>

            <div className="text-center mt-4">
                <h3 className="font-bold text-stone-900 group-hover:text-orange-600 transition-colors">
                    {category.name}
                </h3>
                <p className="text-xs text-stone-400 mt-1">
                    {category.item_count.toLocaleString()} items
                </p>
            </div>

        </Link>
    );
}