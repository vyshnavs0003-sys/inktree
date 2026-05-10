import "./Sidebar.css";

import { useState } from "react";
import { FaPlus } from "react-icons/fa";

import initialTreeData from "../data/treeData";
import TreeNode from "../components/TreeNode";

function Sidebar() {
  const [treeData, setTreeData] = useState(initialTreeData);

  const [activeNodeId, setActiveNodeId] = useState(null);

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
            activeNodeId={activeNodeId}
            setActiveNodeId={setActiveNodeId}
          />
        ))}

      </div>
    </div>
  );
}

export default Sidebar;