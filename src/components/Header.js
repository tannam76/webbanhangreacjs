import { faHome, faShoppingCart, faSignOutAlt, faTags, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/style/header.css';
import { AuthContext } from '../contexts/AuthContext';

function Header({ search, setSearch }) {
  const { isLoggedIn, username, logout } = useContext(AuthContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <h1 className="logo">
          <Link to="/" className="logo-link">
            <img src="https://i.imgur.com/VnQTSQ4.gif" alt="Shop Online Logo" className="logo-image" />
          </Link>
        </h1>
        <nav className="nav">
          <Link to="/" className="nav-link">
            <FontAwesomeIcon icon={faHome} className="icon" /> Home
          </Link>
          <Link to="/products" className="nav-link">
            <FontAwesomeIcon icon={faTags} className="icon" /> Products
          </Link>
          <Link to="/cart" className="nav-link">
            <FontAwesomeIcon icon={faShoppingCart} className="icon" /> Cart
          </Link>
          {isLoggedIn ? (
            <div className="dropdown">
              <button className="btn" onClick={toggleDropdown}>
                <span className="username">Chào, {username}!</span>
              </button>
              {dropdownOpen && (
                <div className="dropdown-menu">
                  <button className="btn logout-btn" onClick={logout}>
                    <FontAwesomeIcon icon={faSignOutAlt} className="icon" /> Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login" className="nav-link">
              <FontAwesomeIcon icon={faUser} className="icon" /> Login
            </Link>
          )}
        </nav>
        {/* Search Bar */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
