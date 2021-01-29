import React from "react";
import ReactDOM from "react-dom";
import Kanban from "./Kanban";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Kanban/>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
