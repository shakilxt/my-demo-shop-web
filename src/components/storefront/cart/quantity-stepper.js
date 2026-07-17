'use client';

export default function QuantityStepper({ quantity, onDecrease, onIncrease }) {
    return (
        <div className="inline-flex items-center border border-stone-200 rounded-lg">
            <button
                type="button"
                onClick={onDecrease}
                className="h-9 w-9 flex items-center justify-center text-stone-600 hover:bg-stone-100 rounded-l-lg"
                aria-label="Decrease quantity"
            >
                −
            </button>
            <span className="w-8 text-center text-sm font-medium text-stone-900">{quantity}</span>
            <button
                type="button"
                onClick={onIncrease}
                className="h-9 w-9 flex items-center justify-center text-stone-600 hover:bg-stone-100 rounded-r-lg"
                aria-label="Increase quantity"
            >
                +
            </button>
        </div>
    );
}