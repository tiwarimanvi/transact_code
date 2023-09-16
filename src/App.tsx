import React, { useState, useEffect } from "react";
import { getAccount } from "./utils/wallet";

// Components
import Navbar from "./components/Navbar";
import FileUpload from "./components/FileUpload";

const App: React.FC = () => {
  
  return (
    <div className="h-100">
      <Navbar />
      <FileUpload />
    </div>
  );
};

export default App;
