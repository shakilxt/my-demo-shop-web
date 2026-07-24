import { IconGitCompare, IconHeart, IconBell, IconUser } from '@tabler/icons-react';
import Logo from './logo';
import ProductSearchBar from './product-search-bar';
import HeaderIconLink from './header-icon-link';
import CartButton from './cart-button';

export default function MainHeader() {
    return (
        <div className="max-w-350 mx-auto px-6 py-4 flex justify-between items-center gap-8">

            <Logo />

            <ProductSearchBar />

            <div className="flex items-center gap-3.5 shrink-0">
                <HeaderIconLink href="/compare" icon={IconGitCompare} label="Compare" />
                <HeaderIconLink href="/wishlist" icon={IconHeart} label="Wishlist" />
                <HeaderIconLink href="/notifications" icon={IconBell} label="Notifications" />
                <HeaderIconLink href="/login" icon={IconUser} label="Sign In" />
            </div>

            <CartButton />

        </div>
    );
}