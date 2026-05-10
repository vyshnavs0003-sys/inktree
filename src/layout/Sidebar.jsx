import "./Sidebar.css";

import { useState } from "react";
import { FaPlus } from "react-icons/fa";

import initialTreeData from "../data/treeData";
import TreeNode from "../components/TreeNode";

import {
  addNode,
  deleteNode,
} from "../utils/treeUtils";

function Sidebar() {
  const [treeData, setTreeData] =
    useState(initialTreeData);

  const [activeNodeId, setActiveNodeId] =
    useState(null);

  
  const createContainer = () => {
    const newNode = {
      id: Date.now(),
      type: "container",
      title: "New Container",

      content: {
        type: "richText",
        value: "<p>New Container</p>",
      },

      isExpanded: true,
      children: [],
    };

    setTreeData([...treeData, newNode]);
  };

 
  const handleAddContainer = (parentId) => {
    const newNode = {
      id: Date.now(),
      type: "container",
      title: "New Container",

      content: {
        type: "richText",
        value: "<p>New Container</p>",
      },

      isExpanded: true,
      children: [],
    };

    setTreeData(
      addNode(treeData, parentId, newNode)
    );
  };

  
  const handleAddLeaf = (parentId) => {
    const newNode = {
      id: Date.now(),
      type: "leaf",
      title: "New Item",

      content: {
        type: "richText",
        value: "<p>New Item</p>",
      },
    };

    setTreeData(
      addNode(treeData, parentId, newNode)
    );
  };

  
  const handleDelete = (nodeId) => {
    setTreeData(
      deleteNode(treeData, nodeId)
    );
  };

  return (
    <div className="sidebar-container">

      {/* Sidebar Header */}
      <div className="sidebar-top d-flex justify-content-between align-items-center mb-3">

        <h6 className="m-0">
          Content Tree
        </h6>

        <button
          className="btn btn-sm btn-dark"
          onClick={createContainer}
        >
          <FaPlus />
        </button>
      </div>

      {/* Tree Nodes */}
      {treeData.map((node) => (
        <TreeNode
          key={node.id}
          node={node}
          activeNodeId={activeNodeId}
          setActiveNodeId={setActiveNodeId}
          handleAddContainer={handleAddContainer}
          handleAddLeaf={handleAddLeaf}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
}

export default Sidebar;