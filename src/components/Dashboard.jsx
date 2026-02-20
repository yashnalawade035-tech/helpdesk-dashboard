import React from 'react';
import { TrendingUp, Clock, CheckCircle } from 'lucide-react';

const StatCard = ({ title, value, change, icon: Icon, colorClass }) => (
    <div className="bg-card text-card-foreground p-6 rounded-xl shadow-sm border border-border hover:shadow-md transition-shadow">
        <div className="flex justify-between items-start">
            <div>
                <p className="text-sm font-medium text-muted-foreground">{title}</p>
                <h3 className="text-3xl font-bold mt-2 tracking-tight">{value}</h3>
            </div>
            <div className={`p-3 rounded-lg ${colorClass}`}>
                <Icon className="w-6 h-6" />
            </div>
        </div>
        <div className="mt-4 flex items-center text-sm">
            <span className="text-emerald-500 font-medium flex items-center gap-1">
                <TrendingUp className="w-3 h-3" /> {change}
            </span>
            <span className="text-muted-foreground ml-2">from last month</span>
        </div>
    </div>
);

const Dashboard = ({ tickets }) => {
    const totalTickets = tickets.length;
    const openTickets = tickets.filter(t => t.status === 'Open').length;
    const resolvedTickets = tickets.filter(t => t.status === 'Resolved').length;

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <StatCard
                title="Total Tickets"
                value={totalTickets}
                change="+12%"
                icon={TrendingUp}
                colorClass="bg-blue-50 text-blue-600"
            />
            <StatCard
                title="Open Tickets"
                value={openTickets}
                change="+5%"
                icon={Clock}
                colorClass="bg-orange-50 text-orange-600"
            />
            <StatCard
                title="Resolved"
                value={resolvedTickets}
                change="+18%"
                icon={CheckCircle}
                colorClass="bg-emerald-50 text-emerald-600"
            />
        </div>
    );
};

export default Dashboard;
