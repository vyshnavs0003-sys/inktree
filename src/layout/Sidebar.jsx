import "./Sidebar.css";

import {
  FaChevronDown,
  FaFolder,
  FaFileAlt,
  FaPlus,
  FaTrash,
} from "react-icons/fa";

function Sidebar() {
  return (
    <div className="sidebar-container">

      {/* Sidebar Header */}
      <div className="sidebar-top d-flex justify-content-between align-items-center mb-3">

        <h6 className="m-0">Content Tree</h6>

        <button className="btn btn-sm btn-dark">
          <FaPlus />
        </button>
      </div>

      {/* Tree Node - Container */}
      <div className="tree-node active-node">

        <div className="d-flex justify-content-between align-items-center">

          {/* Left Section */}
          <div className="d-flex align-items-center gap-2">
            <FaChevronDown />
            <FaFolder />
            <span>Module 1</span>
          </div>

          {/* Actions */}
          <div className="node-actions d-flex gap-2">
            <FaPlus className="action-icon" />
            <FaTrash className="action-icon" />
          </div>
        </div>

        {/* Child Nodes */}
        <div className="child-nodes">

          <div className="tree-leaf d-flex justify-content-between align-items-center">

            <div className="d-flex align-items-center gap-2">
              <FaFileAlt />
              <span>Introduction</span>
            </div>

            <FaTrash className="action-icon" />
          </div>

          <div className="tree-leaf d-flex justify-content-between align-items-center">

            <div className="d-flex align-items-center gap-2">
              <FaFileAlt />
              <span>Lesson Content</span>
            </div>

            <FaTrash className="action-icon" />
          </div>

        </div>
      </div>
    </div>
  );
}

export default Sidebar;