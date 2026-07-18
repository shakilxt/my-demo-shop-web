import Link from 'next/link';

export default function EmptyCart() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
            <h1 className="text-3xl font-bold text-stone-900 mb-4">Your Cart is Empty</h1>
            <p className="text-stone-500 mb-8">Looks like you haven&apos;t added anything yet.</p>
            <Link href="/" className="bg-stone-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-stone-800 transition-colors">
                Continue Shopping
            </Link>
        </div>
    );
}