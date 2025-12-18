function navbar() {
  let image = React.createElement("img", { src: "./logo.svg" }, null);
  let h4 = [
    React.createElement("h4", null, "About Me"),
    React.createElement("h4", null, "Portfolio"),
    React.createElement("h4", null, "Services"),
    React.createElement("h4", null, "Blog"),
  ];
  let arrowIcon = React.createElement(
    "i",
    { class: "ri-arrow-right-up-line" },
    null
  );
  let h3 = React.createElement("h3", null, "Book A Call");
  let cta = React.createElement("div", { id: "cta" }, [h3, arrowIcon]);
  let left = React.createElement("div", { id: "left" }, [image, h4]);
  return React.createElement("nav", null, [left, cta]);
}

export default navbar;
