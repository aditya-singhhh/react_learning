const element1 = React.createElement(
  "h1",
  {
    id: "name",
    class: "element",
    style: {
      align: "center",
      color: "red",
      fontsize: "inherit",
      display: "contents",
    },
  },
  " Aditya Singh"
);
const element2 = React.createElement(
  "h1",
  {
    id: "heading",
    class: "element",
    style: { align: "center", display: "inline-flex" },
  },
  ["My name is", element1]
);
const main_element = React.createElement(
  "div",
  { style: { align: "center" } },
  [element2]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(main_element);
