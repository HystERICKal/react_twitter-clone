import React from "react";
import Sidebar from "./Sidebar";
import "./App.css";

function App() {
  return (
    //BEM
    <div className="app">
      <h1>Confess Thy Sins!!!!</h1>

      {/* Left Sidebar */}
      <Sidebar />

      {/* Feed (Middle scrollable section) */}

      {/* Right Widgets */}
    </div>
  );
}

export default App;
