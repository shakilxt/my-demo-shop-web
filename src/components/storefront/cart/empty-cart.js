import Link from 'next/link';

export default function EmptyCart() {
    return (
        <div className="flex flex-col items-center justify-center py-24 text-center">
            <p className="text-lg text-stone-500 mb-6">Your cart is empty.</p>
            <Link
                href="/"
                className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors font-semibold"
            >
                Continue Shopping
            </Link>
        </div>
    );
}