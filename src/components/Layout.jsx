import { Outlet } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import ScrollToTop from './ScrollToTop.jsx';
import BackgroundBlobs from './BackgroundBlobs.jsx';

export default function Layout() {
  return (
    <div className="min-h-screen transition-colors duration-300">
      <BackgroundBlobs />
      <Navbar />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
