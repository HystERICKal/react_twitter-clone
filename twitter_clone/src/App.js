import React from "react";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import "./App.css";
import Widgets from "./Widgets"

function App() {
  return (
    //BEM
    <div className="app">
      

      {/* Left Sidebar */}
      <Sidebar />

      {/* Feed (Middle scrollable section) */}
      <Feed />

      {/* Right Widgets */}
      <Widgets />
    </div>
  );
}

export default App;
