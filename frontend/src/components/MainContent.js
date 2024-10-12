import React from 'react';
import Header from './Header';
import Card from './Card';
import InfoCard from './InfoCard';
import ImageCard from './ImageCard';
import ChartCard from './ChartCard';
import SalesOverview from './SalesOverview';
import Sidebar from './Sidebar';

const MainContent = () => {
    return (
        <div className="flex">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="flex-1 p-6 bg-gray-100 min-h-screen">
                <Header />
                
                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                <Card title="Today's Money" value="$53,000" percentage="+55%" icon="fas fa-dollar-sign" />
                <Card title="Today's Users" value="2,300" percentage="+3%" icon="fas fa-users" />
                <Card title="New Clients" value="3,462" percentage="-2%" icon="fas fa-user-friends" />
                <Card title="Sales" value="$103,430" percentage="+5%" icon="fas fa-cart-arrow-down" />
                </div>

                {/* Info and Image Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <InfoCard />
                <ImageCard />
                </div>

                {/* Chart and Sales Overview */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <ChartCard />
                <SalesOverview />
                </div>
            </div>
        </div>

    );
};

export default MainContent;
