import {
    IconLayoutGrid, IconLayoutGridFilled,
    IconStack2, IconStack2Filled,
    IconHeart, IconHeartFilled,
    IconMessage, IconMessageFilled,
    IconTicket, IconTicketFilled,
    IconStar, IconStarFilled,
    IconMapPin, IconMapPinFilled,
    IconCreditCard, IconCreditCardFilled,
    IconSettings, IconSettingsFilled,
    IconBell, IconBellFilled,
    IconLogout2

} from '@tabler/icons-react';

export const BUYER_DASHBOARD_NAV = [
    { label: 'Personal Dashboard', href: '/dashboard', icon: IconLayoutGrid, activeIcon: IconLayoutGridFilled },
    { label: 'My Orders', href: '/dashboard/orders', icon: IconStack2, activeIcon: IconStack2Filled },
    { label: 'My Wishlist', href: '/dashboard/wishlist', icon: IconHeart, activeIcon: IconHeartFilled },
    { label: 'My Messages', href: '/dashboard/messages', icon: IconMessage, activeIcon: IconMessageFilled },
    { label: 'Coupons & Offers', href: '/dashboard/coupons', icon: IconTicket, activeIcon: IconTicketFilled },
    { label: 'My Reviews', href: '/dashboard/reviews', icon: IconStar, activeIcon: IconStarFilled },
    { label: 'My Addresses', href: '/dashboard/addresses', icon: IconMapPin, activeIcon: IconMapPinFilled },
    { label: 'Payment Methods', href: '/dashboard/payment-methods', icon: IconCreditCard, activeIcon: IconCreditCardFilled },
    { label: 'Account Settings', href: '/dashboard/settings', icon: IconSettings, activeIcon: IconSettingsFilled },
    { label: 'Notifications Settings', href: '/dashboard/notifications-settings', icon: IconBell, activeIcon: IconBellFilled },
];

export const BUYER_DASHBOARD_LOGOUT = { label: 'Logout', icon: IconLogout2 };