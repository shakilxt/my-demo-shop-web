'use client';

import DashboardSidebar from '@/components/layout/dashboard/dashboard-sidebar';
import { BUYER_DASHBOARD_NAV, BUYER_DASHBOARD_LOGOUT } from '@/lib/data/buyer-dashboard-nav';

export default function BuyerSidebar({ user }) {
    
    function handleLogout() {
        // TODO: Implement actual logout logic here
        console.log("Logging out buyer...");
    }

    return (
        <DashboardSidebar
            user={user}
            navItems={BUYER_DASHBOARD_NAV}
            logoutItem={BUYER_DASHBOARD_LOGOUT}
            onLogout={handleLogout}
        />
    );
}