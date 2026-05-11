import ReactQuill from "react-quill-new";

import "react-quill-new/dist/quill.snow.css";

import "./EditorPanel.css";

import {
  findNodeById,
  updateNodeContent,
} from "../utils/editorUtils";

function EditorPanel({
  tree,
  setTree,
  activeNodeId,
}) {
 

  const activeNode =
    findNodeById(
      tree,
      activeNodeId
    );
  
  const handleEditorChange = (
    value
  ) => {

    const updatedTree =
      updateNodeContent(
        tree,
        activeNodeId,
        value
      );

    setTree(updatedTree);
  };

  return (
    <div className="flex-grow-1 p-4 bg-light">

      {activeNode ? (
        <>

          <h4 className="mb-4">
            {activeNode.title}
          </h4>

          <ReactQuill
            theme="snow"
            value={
              activeNode.content.value
            }
            onChange={
              handleEditorChange
            }
          />

        </>
      ) : (
        <div className="empty-editor-state">
          <h4>
            No Content Selected
          </h4>

          <p>
            Select a node from the sidebar to start editing.
          </p>
        </div>
      )}
    </div>
  );
}

export default EditorPanel;