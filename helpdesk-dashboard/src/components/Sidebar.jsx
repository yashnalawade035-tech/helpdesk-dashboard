import React from 'react';
import { Home, Ticket, Users, Settings, HelpCircle, BarChart2 } from 'lucide-react';

const Sidebar = () => {
    const navLinks = [
        { icon: Home, label: 'Dashboard', active: true },
        { icon: Ticket, label: 'My Tickets' },
        { icon: Users, label: 'Customers' },
        { icon: BarChart2, label: 'Reporting' },
        { icon: Settings, label: 'Settings' },
        { icon: HelpCircle, label: 'Help Center' },
    ];

    // Using a fixed position here to ensure the sidebar stays accessible 
    // even when the user scrolls down a long list of tickets.
    return (
        <aside className="w-64 h-screen bg-sidebar text-sidebar-foreground flex flex-col fixed left-0 top-0 border-r border-gray-800 shadow-xl z-10 transition-all duration-300">
            <div className="p-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                    <Ticket className="w-5 h-5 text-white" />
                </div>
                <h1 className="text-xl font-bold tracking-tight">HelpDesk</h1>
            </div>

            <nav className="flex-1 px-4 py-4 space-y-2">
                {navLinks.map((item) => (
                    <a
                        key={item.label}
                        href="#"
                        className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${item.active
                            ? 'bg-primary/10 text-primary'
                            : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                            }`}
                    >
                        <item.icon className="w-5 h-5" />
                        {item.label}
                    </a>
                ))}
            </nav>

            <div className="p-4 border-t border-gray-800">
                <div className="flex items-center gap-3 px-4 py-2">
                    <img
                        src="https://i.pravatar.cc/150?u=admin"
                        alt="Admin"
                        className="w-8 h-8 rounded-full border border-gray-600"
                    />
                    <div className="flex flex-col">
                        <span className="text-sm font-medium">Admin User</span>
                        <span className="text-xs text-gray-500">admin@helpdesk.com</span>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
