import * as React from "react";
import * as ReactDom from "react-dom";

// import React from "react";

const App = () => {
  return (
    <div className="content">
      <h1>Hello World! Welcome to the Rails 7 Course with react</h1>
      <p>This is a good start of my project</p>
      <p>This is the App components</p>
    </div>
  );
};

document.addEventListener("DOMContentLoaded", () => {
  ReactDom.render(<App />, document.getElementById("app"));
});

export default App;
