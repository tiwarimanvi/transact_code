import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Homepage";
import ProjectUploadForm from "./components/ProjectUploadForm";
import FileUpload from "./components/FileUpload";
import Footer from "./components/Footer";


const App: React.FC = () => {
  
  return (
    <div className="">
      <Navbar />
      <Home />
      {/* <ProjectUploadForm/> */}
      <Footer/>
    </div>
  );
};

export default App;
