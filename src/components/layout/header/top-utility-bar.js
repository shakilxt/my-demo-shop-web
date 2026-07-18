import { ChevronDown, MapPin } from 'lucide-react';

const NAV_LINKS = ['Sell on SellsBuy', 'Customer Service', 'Track Order', 'Membership', 'Download App'];

export default function TopUtilityBar() {
    return (
        <div className="bg-black text-white text-sm">
            <div className="max-w-350 mx-auto px-6 h-9 flex items-center justify-between gap-6">

                <div className="flex items-center gap-1.5 shrink-0 text-gray-200">
                    <MapPin size={14} />
                    <span>Deliver to: Laos, Vientien</span>
                </div>

                <nav className="hidden lg:flex items-center gap-6 text-gray-300">
                    {NAV_LINKS.map((label) => (
                        <a key={label} href="#" className="hover:text-white transition-colors whitespace-nowrap">
                            {label}
                        </a>
                    ))}
                </nav>

                <div className="flex items-center gap-4 shrink-0 text-gray-200">
                    <button type="button" className="flex items-center gap-1 hover:text-white transition-colors">
                        English <ChevronDown size={14} />
                    </button>
                    <button type="button" className="flex items-center gap-1 hover:text-white transition-colors">
                        USD <ChevronDown size={14} />
                    </button>
                </div>

            </div>
        </div>
    );
}