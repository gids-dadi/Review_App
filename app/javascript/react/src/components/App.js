import * as React from "react";
import * as ReactDom from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import React from "react";
import Airlines from "./Airlines/Airlines";
import AirlineDetails from "./AirlineDetails/AirlineDetails";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Airlines />} />
          <Route path="/airlines/:slug" element={<AirlineDetails />} />
        </Routes>
      </Router>
    </div>
  );
};

document.addEventListener("DOMContentLoaded", () => {
  ReactDom.render(<App />, document.getElementById("app"));
});

export default App;
