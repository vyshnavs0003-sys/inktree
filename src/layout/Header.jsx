import { FaBars, FaUserCircle } from "react-icons/fa";
import "./Header.css";

function Header() {
  return (
    <header className="d-flex justify-content-between align-items-center px-4 py-3 bg-white">

      {/* Left Section */}
      <div className="d-flex align-items-center gap-3">
        <FaBars size={20} />
        <h5 className="m-0">Tree Editor</h5>
      </div>

      {/* Center Section */}
      <div className="d-flex gap-2">
        <button className="btn btn-dark btn-sm">
          Tree
        </button>

        <button className="btn btn-outline-secondary btn-sm">
          Graph
        </button>
      </div>

      {/* Right Section */}
      <div className="d-flex align-items-center gap-3">

        <button className="btn btn-primary btn-sm">
          Invite
        </button>

        <FaUserCircle size={28} />
      </div>

    </header>
  );
}

export default Header;