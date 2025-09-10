const Pizza = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.description),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Anju Bakery Store"),
    React.createElement(Pizza, {
      name: "Margherita",
      description:
        "Margherita pizza is as Italian as you can get. It is a variation of the Neapolitan pizza, and it is dressed as a tribute to the Italian flag",
    }),
    React.createElement(Pizza, {
      name: "Neapolitan",
      description:
        "Neapolitan Pizza. Neapolitan pizza comes from the very heart of Naples. This iconic pizza has been delighting palates since the 18th century, and its rich",
    }),
  ]);
};

const containers = document.getElementById("root");
const root = ReactDOM.createRoot(containers);
root.render(React.createElement(App));
gi;
