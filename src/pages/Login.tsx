import { CheckSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

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

      <div className="relative z-10 w-full max-w-md mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-emerald-500 mb-6 shadow-2xl shadow-cyan-500/30">
            <CheckSquare className="w-8 h-8 text-white" strokeWidth={2.5} />
          </div>

          <h1 className="text-5xl font-bold text-white mb-2 tracking-tight">
            Login
          </h1>
          <p className="text-slate-400">Welcome back to your task manager</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-slate-300 mb-3">
              Email Id
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30 transition-all duration-200"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-semibold text-slate-300 mb-3">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30 transition-all duration-200"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-semibold rounded-lg shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-200 disabled:opacity-75 disabled:cursor-not-allowed"
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-slate-400">
            New user?{' '}
            <Link
              to="/signup"
              className="text-cyan-400 font-semibold hover:text-emerald-400 transition-colors duration-200 underline underline-offset-2"
            >
              Sign up here
            </Link>
          </p>
        </div>

        <div className="mt-6 text-center">
          <Link
            to="/"
            className="text-slate-500 hover:text-cyan-400 font-medium transition-colors duration-200 text-sm underline underline-offset-2 decoration-dotted"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
