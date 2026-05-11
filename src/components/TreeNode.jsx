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
  depth,
  activeNodeId,
  setActiveNodeId,
  handleAddContainer,
  handleAddLeaf,
  handleDelete,
}) {

  const [isExpanded, setIsExpanded] =
    useState(node.isExpanded || false);

  const isActive = activeNodeId === node.id;


  const indentation = Math.min(depth * 12, 72);

  return (
    <div className="mb-2">

      <div
        className={`tree-item d-flex justify-content-between align-items-center ${
          isActive
            ? "active-tree-item"
            : ""
        }`}
        style={{
          paddingLeft: `${indentation}px`,
        }}
        
        onClick={() =>{
          setActiveNodeId(node.id)
        }}
      >

        <div className="d-flex align-items-center gap-2">

          {node.type ===
          "container" ? (
            <span
              onClick={(e) => {
                 e.stopPropagation();
                 setIsExpanded(!isExpanded);
                }}
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

          {node.type ===
          "container" ? (
            <FaFolder />
          ) : (
            <FaFileAlt />
          )}

          <span>{node.title}</span>
        </div>

        <div className="d-flex gap-2">

          {node.type ===
            "container" && (
            <>
              <FaFolderPlus
                onClick={(e) => {
                  e.stopPropagation();
                  handleAddContainer(node.id);
                }}
              />

              <FaPlus
               onClick={(e) => {
                e.stopPropagation();
                handleAddLeaf(node.id);
              }}
              />
            </>
          )}

          <FaTrash
            onClick={(e) => {
              e.stopPropagation();
              handleDelete(node.id);
            }}
          />
        </div>
      </div>

      {node.type ===
        "container" &&
        isExpanded &&
        node.children?.map(
          (child) => (
            <div
              className="mt-2"
              key={child.id}
            >
              <TreeNode
                node={child}
                depth={depth + 1}
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