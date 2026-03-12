import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/fda-image.png';
import './Navbar.css'; // external CSS

const Navbar = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: '/dashboard', label: 'Home' },
    { path: '/observation-analysis', label: 'How It Works' },
    { path: '/request-demo', label: 'Schedule a Demo' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a
          href="https://industryiceberg.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="navbar-brand"
        >
          <div className="navbar-logo-wrapper">
            <img src={logo} alt="FDA Logo" className="navbar-logo" />
          </div>
        </a>

        <div className="navbar-items">
          {navItems.map((item) => {
            const active = isActive(item.path);
            if (item.path === '/dashboard') {
              return (
                <a
                  key={item.path}
                  href="https://industryiceberg.com/"
                  className={`navbar-link ${active ? 'active' : ''}`}
                >
                  {item.label}
                </a>
              );
            }
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`navbar-link ${active ? 'active' : ''}`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;