import React from 'react';
import FixedHeaderControl from '../../../components/FixedHeaderControl';
import HeaderSection from '../../../components/HeaderSection';

export default function IndexPage() {
    return (
        <div className={['h-100 user-h-area', 'browser browser-4xl'].join(' ')}>
            <FixedHeaderControl>
                <HeaderSection />
            </FixedHeaderControl>
        </div>
    );
}
