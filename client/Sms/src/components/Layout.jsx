import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

function Layout() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="max-w-6xl mx-auto py-8 px-4">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
    