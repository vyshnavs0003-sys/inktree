import { useState } from "react";

import {
  FaBars,
  FaUserCircle,
  FaBell,
  FaSearch,
} from "react-icons/fa";

import "./Header.css";

function Header({
  darkMode,
  setDarkMode,
}) {

  const [showMenu, setShowMenu] =
    useState(false);

  return (

    <header className="header-container">

      {/* Left Section */}
      <div className="header-left">

        <FaBars size={18} />

        <div className="search-box">

          <FaSearch />

          <input
            type="text"
            placeholder="Search..."
          />

        </div>

      </div>

      {/* Center Section */}
      <div className="header-center">

        <button className="active-tab">
          Tree
        </button>

        <button>
          Graph
        </button>

      </div>

      {/* Right Section */}
      <div className="header-right">

        <button className="invite-btn">
          Invite
        </button>

        <FaBell className="header-icon" />

        <div className="profile-wrapper">

          <FaUserCircle
            size={28}
            className="header-icon"
            onClick={() =>
              setShowMenu(!showMenu)
            }
          />

          {showMenu && (

            <div className="profile-menu">

              {/* Dark Mode Toggle */}
              <div className="dark-mode-toggle">

                <span>Dark Mode</span>

                <label className="switch">

                  <input
                    type="checkbox"
                    checked={darkMode}
                    onChange={() =>
                      setDarkMode(!darkMode)
                    }
                  />

                  <span className="slider"></span>

                </label>

              </div>

              <p>Profile</p>

              <p>What's New</p>

              <p>Help</p>

              <p>Logout</p>

            </div>

          )}

        </div>

      </div>

    </header>
  );
}

export default Header;