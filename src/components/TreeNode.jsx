import { useState } from "react";

import {
  FaChevronDown,
  FaChevronRight,
  FaFolder,
  FaFileAlt,
} from "react-icons/fa";

function TreeNode({
  node,
  activeNodeId,
  setActiveNodeId,
}) {

  const [isExpanded, setIsExpanded] = useState(
    node.isExpanded || false
  );

  const isActive = activeNodeId === node.id;

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="mb-2">

      {/* Node Row */}
      <div
        className={`tree-item d-flex align-items-center gap-2 ${
          isActive ? "active-tree-item" : ""
        }`}
        onClick={() => setActiveNodeId(node.id)}
      >

        {/* Container Icon */}
        {node.type === "container" ? (
          <span onClick={handleToggle}>
            {isExpanded ? (
              <FaChevronDown />
            ) : (
              <FaChevronRight />
            )}
          </span>
        ) : (
          <span className="leaf-spacing"></span>
        )}

        {/* Node Type Icon */}
        {node.type === "container" ? (
          <FaFolder />
        ) : (
          <FaFileAlt />
        )}

        {/* Title */}
        <span>{node.title}</span>
      </div>

      {/* Recursive Children */}
      {node.type === "container" &&
        isExpanded &&
        node.children && (
          <div className="ms-4 mt-2">

            {node.children.map((child) => (
              <TreeNode
                key={child.id}
                node={child}
                activeNodeId={activeNodeId}
                setActiveNodeId={setActiveNodeId}
              />
            ))}

          </div>
        )}
    </div>
  );
}

export default TreeNode;