import { useEffect, useState } from "react";

import Header from "./Header";
import Sidebar from "./Sidebar";
import EditorPanel from "./EditorPanel";

import treeData from "../data/treeData";

function MainLayout() {

  
  const [tree, setTree] =
    useState(() => {

      const savedTree =
        localStorage.getItem(
          "treeData"
        );

      return savedTree
        ? JSON.parse(savedTree)
        : treeData;
    });

  const [activeNodeId, setActiveNodeId] =
    useState(null);

  
  useEffect(() => {

    localStorage.setItem(
      "treeData",
      JSON.stringify(tree)
    );

  }, [tree]);

  return (
    <div className="container-fluid vh-100">

      <div className="row h-100">

        {/* Sidebar */}
        <div className="col-md-3 border-end p-3">

          <Sidebar
            tree={tree}
            setTree={setTree}
            activeNodeId={activeNodeId}
            setActiveNodeId={setActiveNodeId}
          />

        </div>

        {/* Main Content */}
        <div className="col-md-9 d-flex flex-column p-0">

          <Header />

          <EditorPanel
            tree={tree}
            setTree={setTree}
            activeNodeId={activeNodeId}
          />

        </div>
      </div>
    </div>
  );
}

export default MainLayout;