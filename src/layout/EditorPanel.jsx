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
  console.log("activateNodeId in EditorPanel:", activeNodeId);  

  const activeNode =
    findNodeById(
      tree,
      activeNodeId
    );
  console.log("activeNode found:", activeNode);
  console.log("Does activeNode have content?", activeNode?.content);
  console.log("Content value:", activeNode?.content?.value);  

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
        <div>
          Select a node to edit
        </div>
      )}
    </div>
  );
}

export default EditorPanel;