const heading = React.createElement(
  "h1",
  { id: "heading" },
  React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child" }, [
      React.createElement("h1", {}, "I'm an h1 tag 2"),
      React.createElement("h2", {}, "I'm an h1 tag"),
    ]),
    React.createElement("div", { id: "child 2" }, [
      React.createElement("h1", {}, "I'm an h1 tag 2"),
      React.createElement("h2", {}, "I'm an h1 tag"),
    ]),
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
