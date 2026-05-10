import Header from "./Header";
import Sidebar from "./Sidebar";
import EditorPanel from "./EditorPanel";

function MainLayout() {
  return (
    <div className="container-fluid vh-100 d-flex flex-column p-0">
      
      {/* Header */}
      <div className="border-bottom shadow-sm">
        <Header />
      </div>

      {/* Main Content */}
      <div className="row flex-grow-1 m-0">

        {/* Sidebar */}
        <div className="col-3 border-end p-3 bg-light">
          <Sidebar />
        </div>

        {/* Editor Panel */}
        <div className="col-9 p-3">
          <EditorPanel />
        </div>

      </div>
    </div>
  );
}

export default MainLayout;