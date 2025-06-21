import { Link } from 'react-router-dom';
import Navbar from './Components/Navbar.jsx';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div>
        {/* SHow navbar */}
        <Navbar/>
        <main>
            {/* magice render all child routes , put layout as parent, other pages will be children  dynamic, */}
            <Outlet />
        </main>
    </div>
  );
}

export default Layout;