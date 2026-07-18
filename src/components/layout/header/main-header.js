import { Bell, GitCompare, Heart, User } from 'lucide-react';
import Logo from './logo';
import ProductSearchBar from './product-search-bar';
import HeaderIconLink from './header-icon-link';
import CartButton from './cart-button';

export default function MainHeader() {
    return (
        <div className="max-w-350 mx-auto px-6 py-5 flex justify-between items-center gap-8">

            <Logo />

            <ProductSearchBar />

            <div className="flex items-center gap-3.5 shrink-0">
                <HeaderIconLink href="/compare" icon={GitCompare} label="Compare" />
                <HeaderIconLink href="/wishlist" icon={Heart} label="Wishlist" />
                <HeaderIconLink href="/notifications" icon={Bell} label="Notifications" />
                <HeaderIconLink href="/account" icon={User} label="Sign In" />
            </div>

            <CartButton />

        </div>
    );
}