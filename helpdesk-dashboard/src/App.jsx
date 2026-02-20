import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import TicketTable from './components/TicketTable';
import mockData from './mockData.json';
import { Search, Bell, Sun } from 'lucide-react';

function App() {
  const [tickets, setTickets] = useState([]);
  const [filteredTickets, setFilteredTickets] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  // Load initial data
  useEffect(() => {
    setTickets(mockData);
    setFilteredTickets(mockData);
  }, []);

  // Main filtering logic.
  // I chose to build this client-side for the mock data, but in a production app 
  // with thousands of tickets, I would debounce this input and call an API endpoint.
  useEffect(() => {
    if (!tickets.length) return;

    const lowerTerm = searchTerm.toLowerCase();

    const matches = tickets.filter(ticket => {
      const matchStatus = statusFilter === 'All' || ticket.status === statusFilter;
      const matchSearch = !searchTerm || (
        ticket.subject.toLowerCase().includes(lowerTerm) ||
        ticket.requester.toLowerCase().includes(lowerTerm) ||
        ticket.id.toLowerCase().includes(lowerTerm)
      );

      return matchStatus && matchSearch;
    });

    setFilteredTickets(matches);
  }, [searchTerm, statusFilter, tickets]);

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />

      <main className="ml-64 min-h-screen transition-all duration-300">
        <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-md border-b border-border px-8 py-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold tracking-tight">Dashboard Overview</h2>

          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search tickets..."
                className="pl-9 pr-4 py-2 rounded-lg border border-input bg-card text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all w-64"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <button className="p-2 text-muted-foreground hover:bg-muted rounded-full transition-colors relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
            </button>
            <button className="p-2 text-muted-foreground hover:bg-muted rounded-full transition-colors">
              <Sun className="w-5 h-5" />
            </button>
          </div>
        </header>

        <div className="p-8 max-w-7xl mx-auto space-y-8">
          <section>
            <Dashboard tickets={tickets} />
          </section>

          <section className="flex gap-2 pb-2 overflow-x-auto">
            {['All', 'Open', 'In Progress', 'Resolved'].map((status) => (
              <button
                key={status}
                onClick={() => setStatusFilter(prev => prev === status ? 'All' : status)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${statusFilter === status
                  ? 'bg-primary text-white shadow-md shadow-primary/20'
                  : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
                  }`}
              >
                {status}
              </button>
            ))}
          </section>

          <section>
            <TicketTable tickets={filteredTickets} />
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
