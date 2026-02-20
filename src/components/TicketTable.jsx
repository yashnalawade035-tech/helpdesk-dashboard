import React from 'react';
import { MoreHorizontal, Filter, Search } from 'lucide-react';



const TicketTable = ({ tickets }) => {

    const getStatusColor = (status) => {
        if (status === 'Open') return 'bg-orange-100 text-orange-700 border-orange-200';
        if (status === 'In Progress') return 'bg-blue-100 text-blue-700 border-blue-200';
        if (status === 'Resolved') return 'bg-emerald-100 text-emerald-700 border-emerald-200';
        return 'bg-gray-100 text-gray-700';
    };

    const getPriorityColor = (priority) => {
        switch (priority) {
            case 'High': return 'text-red-600 bg-red-50';
            case 'Medium': return 'text-yellow-600 bg-yellow-50';
            case 'Low': return 'text-gray-600 bg-gray-50';
            default: return 'text-gray-600';
        }
    };

    return (
        <div className="bg-card rounded-xl shadow-sm border border-border overflow-hidden">
            <div className="p-6 border-b border-border flex flex-col sm:flex-row justify-between items-center gap-4">
                <h2 className="text-lg font-semibold">Recent Tickets</h2>
                <div className="flex gap-2">
                    <button className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-gray-600 bg-gray-50 hover:bg-gray-100 rounded-md border border-gray-200 transition-colors">
                        <Filter className="w-4 h-4" /> Filter
                    </button>
                    <button className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-gray-600 bg-gray-50 hover:bg-gray-100 rounded-md border border-gray-200 transition-colors">
                        Export
                    </button>
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead>
                        <tr className="bg-muted/50 border-b border-border text-xs uppercase text-muted-foreground font-semibold tracking-wider">
                            <th className="px-6 py-4">Ticket Details</th>
                            <th className="px-6 py-4">Requester</th>
                            <th className="px-6 py-4">Priority</th>
                            <th className="px-6 py-4">Status</th>
                            <th className="px-6 py-4">Date</th>
                            <th className="px-6 py-4 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                        {tickets.map((ticket) => (
                            <tr key={ticket.id} className="hover:bg-muted/30 transition-colors">
                                <td className="px-6 py-4">
                                    <div className="flex flex-col">
                                        <span className="text-sm font-medium text-foreground">{ticket.subject}</span>
                                        <span className="text-xs text-muted-foreground">#{ticket.id}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <img
                                            src={ticket.avatar}
                                            alt={ticket.requester}
                                            className="w-8 h-8 rounded-full bg-gray-200 object-cover"
                                        />
                                        <span className="text-sm text-gray-700">{ticket.requester}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getPriorityColor(ticket.priority)}`}>
                                        {ticket.priority}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusColor(ticket.status)}`}>
                                        {ticket.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-500">
                                    {ticket.date}
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <button className="text-gray-400 hover:text-gray-600 transition-colors">
                                        <MoreHorizontal className="w-5 h-5" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                        {tickets.length === 0 && (
                            <tr>
                                <td colSpan="6" className="px-6 py-8 text-center text-muted-foreground">
                                    No tickets found matching your criteria.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            <div className="p-4 border-t border-border bg-gray-50 flex justify-between items-center text-sm text-muted-foreground">
                <span>Showing {tickets.length} entries</span>
                <div className="flex gap-1">
                    <button className="px-3 py-1 rounded hover:bg-gray-200 disabled:opacity-50">Prev</button>
                    <button className="px-3 py-1 rounded bg-white border shadow-sm text-foreground font-medium">1</button>
                    <button className="px-3 py-1 rounded hover:bg-gray-200">2</button>
                    <button className="px-3 py-1 rounded hover:bg-gray-200">Next</button>
                </div>
            </div>
        </div>
    );
};

export default TicketTable;
