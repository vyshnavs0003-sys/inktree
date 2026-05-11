import "./Sidebar.css";

import { FaPlus } from "react-icons/fa";

import TreeNode from "../components/TreeNode";

import {
  addNode,
  deleteNode,
} from "../utils/treeUtils";

function Sidebar({
  tree,
  setTree,
  activeNodeId,
  setActiveNodeId,
}) {

  // Root Container
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

    setTree([
      ...tree,
      newNode,
    ]);
  };

  // Add Container Child
  const handleAddContainer = (
    parentId
  ) => {

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

    setTree(
      addNode(
        tree,
        parentId,
        newNode
      )
    );
  };

  // Add Leaf Child
  const handleAddLeaf = (
    parentId
  ) => {

    const newNode = {
      id: Date.now(),

      type: "leaf",

      title: "New Item",

      content: {
        type: "richText",
        value: "<p>New Item</p>",
      },
    };

    setTree(
      addNode(
        tree,
        parentId,
        newNode
      )
    );
  };

  // Delete
  const handleDelete = (
    nodeId
  ) => {

    setTree(
      deleteNode(
        tree,
        nodeId
      )
    );
  };

  return (
    <div className="sidebar-container">

      {/* Header */}
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

      {/* Tree */}
      {tree.map((node) => (
        <TreeNode
          key={node.id}
          node={node}
          depth={0}
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