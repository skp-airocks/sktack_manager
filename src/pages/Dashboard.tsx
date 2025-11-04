import { CheckSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500 rounded-full blur-3xl"></div>
      </div>

      <header className="absolute top-0 left-0 w-full p-6 z-10">
        <Link to="/" className="flex items-center gap-2 text-white hover:opacity-80 transition-opacity">
          <CheckSquare className="w-6 h-6 text-cyan-400" strokeWidth={2.5} />
          <span className="text-xl font-bold tracking-tight">Bolt.new</span>
        </Link>
      </header>

      <div className="relative z-10 text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500 to-emerald-500 mb-6 shadow-2xl shadow-cyan-500/30">
          <CheckSquare className="w-10 h-10 text-white" strokeWidth={2.5} />
        </div>

        <h1 className="text-5xl font-bold text-white mb-4 tracking-tight">
          Dashboard
        </h1>

        <p className="text-xl text-slate-400 mb-8">
          Your dashboard is coming soon!
        </p>

        <Link
          to="/"
          className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-semibold rounded-lg shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-200"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;
