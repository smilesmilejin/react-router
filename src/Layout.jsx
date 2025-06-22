import { Link } from 'react-router-dom';
import Navbar from './Components/Navbar.jsx';
import { Outlet } from 'react-router-dom';
import Header from './Components/Header.jsx';
import Footer
 from './Components/Footer.jsx';
function Layout() {
  return (
    <div>
        {/* Show navbar */}
        <Header />
        <Navbar/>
        <main>
            {/* magice render all child routes , put layout as parent, other pages will be children  dynamic, */}
            <Outlet />
        </main>
        <Footer />
    </div>
  );
}

export default Layout;