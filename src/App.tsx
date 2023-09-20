import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Homepage";
import ProjectUploadForm from "./components/ProjectUploadForm";


const App: React.FC = () => {
  
  return (
    <div className="">
      <ProjectUploadForm></ProjectUploadForm>
      {/* <Navbar />
      <Home /> */}
    </div>
  );
};

export default App;
