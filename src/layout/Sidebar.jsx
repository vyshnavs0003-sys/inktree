import "./Sidebar.css";

import { FaPlus } from "react-icons/fa";

import treeData from "../data/treeData";
import TreeNode from "../components/TreeNode";

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

      {/* Dynamic Tree */}
      <div>

        {treeData.map((node) => (
          <TreeNode
            key={node.id}
            node={node}
          />
        ))}

      </div>
    </div>
  );
}

export default Sidebar;