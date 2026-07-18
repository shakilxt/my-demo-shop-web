import StickyHeaderWrapper from './sticky-header-wrapper';
import TopUtilityBar from './top-utility-bar';
import MainHeader from './main-header';

export default function SiteHeader() {
    return (
        <StickyHeaderWrapper
            utilityBar={<TopUtilityBar />}
            mainHeader={<MainHeader />}
        />
    );
}