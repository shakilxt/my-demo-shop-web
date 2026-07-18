import { Headset, RotateCcw, ShieldCheck, Truck } from 'lucide-react';

const FEATURES = [
    { icon: Truck, title: 'Free Shipping', description: 'On all orders over $50' },
    { icon: ShieldCheck, title: 'Secure Payment', description: '100% secure payment' },
    { icon: RotateCcw, title: 'Easy Return', description: '30 days return policy' },
    { icon: Headset, title: '24/7 Support', description: 'Dedicated support' },
];

export default function FeatureBadges() {
    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.25">
            {FEATURES.map((feature) => (
                <div
                    key={feature.title}
                    className="flex items-center gap-3 bg-gray-100 border border-gray-100 px-5 py-4"
                >
                    <feature.icon size={30} strokeWidth={1.5} className="text-gray-800 shrink-0" />
                    <div className="flex flex-col gap-1">
                        <p className="text-sm font-semibold text-gray-900">{feature.title}</p>
                        <p className="text-xs text-gray-500">{feature.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}