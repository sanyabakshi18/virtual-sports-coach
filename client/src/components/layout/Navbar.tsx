import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-900/80 backdrop-blur-md border-b border-slate-700 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="text-2xl font-bold text-blue-400">
          🏸 Virtual Sports Coach
        </Link>

        <div className="hidden md:flex gap-8 text-slate-200 font-medium">
          <Link to="/">Home</Link>
          <Link to="/upload">Analyze</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/history">History</Link>
        </div>

        <Link
          to="/upload"
          className="bg-blue-600 hover:bg-blue-700 transition px-5 py-2 rounded-xl text-white font-semibold"
        >
          Get Started
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;