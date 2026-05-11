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

  
  const [darkMode, setDarkMode] =
    useState(() => {

      const savedTheme =
        localStorage.getItem(
          "darkMode"
        );

      return savedTheme === "true";
    });

  
  useEffect(() => {

    localStorage.setItem(
      "treeData",
      JSON.stringify(tree)
    );

  }, [tree]);

  
  useEffect(() => {

    localStorage.setItem(
      "darkMode",
      darkMode
    );

  }, [darkMode]);

  return (

    <div
      className={`container-fluid vh-100 d-flex flex-column p-0 ${
        darkMode ? "dark-mode" : ""
      }`}
    >

      {/* Header */}
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      {/* Main Section */}
      <div className="row flex-grow-1 m-0">

        {/* Sidebar */}
        <div className="col-12 col-md-3 border-end p-3">

          <Sidebar
            tree={tree}
            setTree={setTree}
            activeNodeId={activeNodeId}
            setActiveNodeId={setActiveNodeId}
          />

        </div>

        {/* Editor */}
        <div className="col-12 col-md-9 p-0">

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