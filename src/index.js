import React from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from 'react-dom'

import FileUploadPage from "./FileHandler";

function App() {
  return (
    <div className="App">
      <h1> WALLAH BRUDER</h1>
      <FileUploadPage />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

//export default App;