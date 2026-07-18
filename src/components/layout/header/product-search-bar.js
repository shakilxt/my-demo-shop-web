import { Search } from 'lucide-react';
import SearchScopeToggle from './search-scope-toggle';

export default function ProductSearchBar() {
    return (
        <form className="flex-1 flex items-center max-w-2xl border border-gray-200 rounded-full px-1.75 gap-4 focus-within:ring-2 focus-within:ring-stone-900/10">

            <SearchScopeToggle />

            <span className='self-stretch w-px bg-gray-200'></span>

            <input
                type="text"
                name="q"
                placeholder="Search products..."
                autoComplete="off"
                className="flex-1 py-1.75 text-sm font-medium outline-none placeholder:text-gray-400 text-gray-900"
            />

            <button
                type="submit"
                aria-label="Search"
                className="w-12 h-12 flex items-center justify-center text-gray-900 shrink-0 cursor-pointer hover:bg-gray-200 rounded-full transition-colors"
            >
                <Search size={24} />
            </button>
        </form>
    );
}