import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/fda-image.png';
import './ComplisenseNavbar.css';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    const currentPath = location.pathname;
    
    // Remove the /complisense prefix for comparison
    const pathWithoutPrefix = currentPath.replace('/complisense', '');
    
    // Handle dashboard (empty path or /)
    if (path === 'dashboard') {
      return pathWithoutPrefix === '' || pathWithoutPrefix === '/';
    }
    
    // Handle other paths
    return pathWithoutPrefix === `/${path}`;
  };

  const handleDashboardClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = '/';
  };

  const navItems = [
    { path: 'dashboard', label: 'Home' },
    { path: 'observation-analysis', label: 'How It Works' },
    { path: 'request-demo', label: 'Schedule a Demo' },

  ];

  return (
    <nav className="complisense-navbar">
      <div className="complisense-navbar-container">
        <div className="complisense-navbar-content">
          <a href="/" className="complisense-logo-link">
            <div className="complisense-logo-container">
              <img
                src={logo}
                alt="FDA Logo"
                style={{ width: '158px', height: '59px' }}
                className="complisense-logo-image"
              />
            </div>
          </a>
          
          <div className="complisense-nav-items">
            {navItems.map((item) => {
              const active = isActive(item.path);
              if (item.path === 'dashboard') {
                return (
                  <a
                    key={item.path}
                    href="/"
                    onClick={handleDashboardClick}
                    className={`complisense-nav-link ${active ? 'complisense-nav-link-active' : ''}`}
                  >
                    <span className="complisense-nav-link-text">{item.label}</span>
                  </a>
                );
              }
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`complisense-nav-link ${active ? 'complisense-nav-link-active' : ''}`}
                >
                  <span className="complisense-nav-link-text">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
