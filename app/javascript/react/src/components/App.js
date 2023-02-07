import * as React from "react";
import * as ReactDom from "react-dom";

// import React from "react";

const App = () => {
  return (
    <div className="content">
      <Router>
        <Routes>
          <Route path="/" component={App} />
        </Routes>
      </Router>
    </div>
  );
};

document.addEventListener("DOMContentLoaded", () => {
  ReactDom.render(<App />, document.getElementById("app"));
});

export default App;
