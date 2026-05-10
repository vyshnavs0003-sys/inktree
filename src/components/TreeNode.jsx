import { useState } from "react";

import {
  FaChevronDown,
  FaChevronRight,
  FaFolder,
  FaFileAlt,
  FaFolderPlus,
  FaPlus,
  FaTrash,
} from "react-icons/fa";

function TreeNode({
  node,
  activeNodeId,
  setActiveNodeId,
  handleAddContainer,
  handleAddLeaf,
  handleDelete,
}) {

  const [isExpanded, setIsExpanded] =
    useState(node.isExpanded || false);

  const isActive =
    activeNodeId === node.id;

  return (
    <div className="mb-2">

      {/* Node Row */}
      <div
        className={`tree-item d-flex justify-content-between align-items-center ${
          isActive
            ? "active-tree-item"
            : ""
        }`}
        onClick={() =>
          setActiveNodeId(node.id)
        }
      >

        {/* Left Section */}
        <div className="d-flex align-items-center gap-2">

          {/* Expand Collapse */}
          {node.type ===
          "container" ? (
            <span
              onClick={() =>
                setIsExpanded(
                  !isExpanded
                )
              }
            >
              {isExpanded ? (
                <FaChevronDown />
              ) : (
                <FaChevronRight />
              )}
            </span>
          ) : (
            <span className="leaf-spacing"></span>
          )}

          {/* Node Icon */}
          {node.type ===
          "container" ? (
            <FaFolder />
          ) : (
            <FaFileAlt />
          )}

          {/* Title */}
          <span>{node.title}</span>
        </div>

        {/* Actions */}
        <div className="d-flex gap-2">

          {/* Container Actions */}
          {node.type ===
            "container" && (
            <>
              <FaFolderPlus
                onClick={() =>
                  handleAddContainer(
                    node.id
                  )
                }
              />

              <FaPlus
                onClick={() =>
                  handleAddLeaf(
                    node.id
                  )
                }
              />
            </>
          )}

          {/* Delete */}
          <FaTrash
            onClick={() =>
              handleDelete(
                node.id
              )
            }
          />
        </div>
      </div>

      {/* Recursive Children */}
      {node.type ===
        "container" &&
        isExpanded &&
        node.children?.map(
          (child) => (
            <div
              className="ms-4 mt-2"
              key={child.id}
            >
              <TreeNode
                node={child}
                activeNodeId={
                  activeNodeId
                }
                setActiveNodeId={
                  setActiveNodeId
                }
                handleAddContainer={
                  handleAddContainer
                }
                handleAddLeaf={
                  handleAddLeaf
                }
                handleDelete={
                  handleDelete
                }
              />
            </div>
          )
        )}
    </div>
  );
}

export default TreeNode;