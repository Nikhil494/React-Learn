import React from "react";
import ReactDOM from "react-dom/client";

const element = <h1>React Element</h1>;

const TitleComponent = () => <h1>Hello World from React Functional Component</h1>;

const HeadingComponent = () => (
  <div id="container">
    {element}
    <TitleComponent />
    <h1>Heading 1</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
