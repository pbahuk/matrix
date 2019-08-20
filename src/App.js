import React from "react";
import ReactDOM from "react-dom";
import Sample from "./browser/components/Sample";

const App = () => (
  <div>
    <Sample message="Message from App" />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
