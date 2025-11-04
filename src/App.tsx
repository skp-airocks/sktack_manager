import { CheckSquare } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500 rounded-full blur-3xl"></div>
      </div>

      <header className="absolute top-0 left-0 w-full p-6 z-10">
        <div className="flex items-center gap-2 text-white">
          <CheckSquare className="w-6 h-6 text-cyan-400" strokeWidth={2.5} />
          <span className="text-xl font-bold tracking-tight">Bolt.new</span>
        </div>
      </header>

      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500 to-emerald-500 mb-6 shadow-2xl shadow-cyan-500/30">
            <CheckSquare className="w-10 h-10 text-white" strokeWidth={2.5} />
          </div>

          <h1 className="text-6xl font-bold text-white mb-4 tracking-tight">
            Welcome to My Task Manager
          </h1>

          <p className="text-xl text-slate-400 max-w-lg mx-auto leading-relaxed">
            Organize your work, boost your productivity, and stay on top of everything that matters.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-semibold rounded-lg shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2">
            Login
          </button>

          <button className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-slate-600 text-white font-semibold rounded-lg hover:border-slate-400 hover:bg-slate-800/50 transition-all duration-200">
            Sign Up
          </button>
        </div>

        <button className="text-slate-500 hover:text-cyan-400 font-medium transition-colors duration-200 underline underline-offset-4 decoration-dotted">
          Go to Dashboard
        </button>

        <div className="mt-16 grid grid-cols-3 gap-8 max-w-md mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-1">10K+</div>
            <div className="text-sm text-slate-500">Tasks Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-1">5K+</div>
            <div className="text-sm text-slate-500">Active Users</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-1">99%</div>
            <div className="text-sm text-slate-500">Satisfaction</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <div className="flex gap-2">
          <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
          <div className="w-2 h-2 rounded-full bg-slate-600"></div>
          <div className="w-2 h-2 rounded-full bg-slate-600"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
