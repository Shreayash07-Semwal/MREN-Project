import { Link } from 'react-router-dom';
import { useAuth } from '../store/auth'; // Ensure correct path to your AuthContext
import "./Navbar.css";

export const Navbar = () => {
  const { isLoggedIn } = useAuth(); // Destructure `isLoggedIn` from AuthContext

  return (
    <>
      <header>
        <div className="container">
          <div className="logo-brand">
            <Link to="/">Shreyash Semwal</Link>
          </div>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/service">Service</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/about">About</Link></li>
              {isLoggedIn ? (
                <li>
                  <Link to="/logout">Logout</Link>
                </li>
              ) : (
                <>
                  <li>
                    <Link to="/Registration">Registration</Link>
                  </li>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
