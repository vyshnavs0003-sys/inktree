import {
  FaChevronDown,
  FaFolder,
  FaFileAlt,
} from "react-icons/fa";

function TreeNode({ node }) {
  return (
    <div className="mb-2">

      {/* Node Row */}
      <div className="d-flex align-items-center gap-2">

        {node.type === "container" ? (
          <>
            <FaChevronDown />
            <FaFolder />
          </>
        ) : (
          <FaFileAlt />
        )}

        <span>{node.title}</span>
      </div>

      {/* Recursive Children */}
      {node.type === "container" &&
        node.children && (
          <div className="ms-4 mt-2">

            {node.children.map((child) => (
              <TreeNode
                key={child.id}
                node={child}
              />
            ))}

          </div>
        )}
    </div>
  );
}

export default TreeNode;