import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-indigo-700 text-white p-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Student Management System</Link>
        <div className="space-x-4">
          <Link to="/" className="hover:text-indigo-200 transition">Dashboard</Link>
          <Link to="/add" className="bg-indigo-500 px-4 py-2 rounded-md hover:bg-indigo-600 transition">Add Student</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
