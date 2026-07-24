'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ProfileCard from '@/components/storefront/dashboard/profile-card';
import AnimatedNavIcon from '@/components/ui/animated-nav-icon';

export default function DashboardSidebar({ user, navItems, logoutItem, onLogout }) {

    const pathname = usePathname();

    function handleLogoutClick() {
        if (onLogout) {
            onLogout();
        } else {
            // TODO: call sign-out action once auth exists
            console.log('logout clicked');
        }
    }

    return (
        <aside className="w-75 shrink-0 flex flex-col gap-8">

            {user && <ProfileCard user={user} />}

            <nav className="bg-white border border-gray-200 font-semibold text-sm text-gray-900 overflow-hidden">

                {navItems.map((item) => {
                    const isActive = pathname === item.href;

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`flex items-center gap-5 px-5 py-3 transition-colors ${isActive
                                ? 'bg-orange-50 text-orange-600'
                                : 'hover:bg-gray-50'
                                }`}
                            replace
                        >

                            <AnimatedNavIcon
                                isActive={isActive}
                                icon={item.icon}
                                activeIcon={item.activeIcon}
                            />

                            {item.label}
                        </Link>
                    );
                })}

                {logoutItem && (
                    <button
                        type="button"
                        onClick={handleLogoutClick}
                        className="w-full flex items-center gap-5 px-5 py-3 hover:bg-gray-100 cursor-pointer transition-colors"
                    >
                        <AnimatedNavIcon 
                            isActive={false} 
                            icon={logoutItem.icon} 
                        />
                        {logoutItem.label}
                    </button>
                )}

            </nav>

        </aside>
    );
}