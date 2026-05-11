import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import "./EditorPanel.css";
import { findNodeById, updateNodeContent } from "../utils/editorUtils";


const modules = {
  toolbar: [
    [{ header: [1, 2, 3, false] }],  
    ["bold", "italic", "underline", "strike"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["blockquote", "code-block"],
    ["link", "image", "video"],
    ["clean"],  
  ],
};

const formats = [
  "header",
  "bold", "italic", "underline", "strike",
  "list", "bullet",
  "blockquote", "code-block",
  "link", "image", "video",
];

function EditorPanel({ tree, setTree, activeNodeId }) {
  const activeNode = findNodeById(tree, activeNodeId);

  const handleEditorChange = (value) => {
    const updatedTree = updateNodeContent(tree, activeNodeId, value);
    setTree(updatedTree);
  };

  return (
    <div className="editor-panel">
      {activeNode ? (
        <>
          <div className="editor-top-section">
            <div>
              <h2 className="editor-brand">InkTree Editor</h2>
              <p className="editor-subtitle">Collaborative Content Editor</p>
            </div>
            <button className="editor-share-btn">Share</button>
          </div>
          <p className="editor-breadcrumb">Workspace / Content / Editor</p>
          <h3 className="editor-title">{activeNode.title}</h3>
          <div className="toolbar-section-label">Formatting Tools</div>
          <ReactQuill
            theme="snow"
            modules={modules}
            formats={formats}
            value={activeNode.content.value}
            onChange={handleEditorChange}
          />
         
          <div className="add-content-section">
            <button>+ Add Widget</button>
            <button>+ Add Media</button>
          </div>
        </>
      ) : (
        <div className="empty-editor-state">
          <h2 className="editor-brand">InkTree</h2>
          <p className="editor-subtitle">Collaborative Content Editor</p>
          <h4>No Content Selected</h4>
          <p>Select a node from the sidebar to start editing.</p>
        </div>
      )}
    </div>
  );
}

export default EditorPanel;