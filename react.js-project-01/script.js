let dom = ReactDOM.createRoot(document.querySelector("#root"));
import navbar from "./navbar.js";
import heroSection from "./heroSection.js";

let img = React.createElement(
  "img",
  { src: "./men.webp", id: "men-pic" },
  null
);
let main = React.createElement(
  "main",
  { id: "main" },
  React.createElement(navbar),
  heroSection,
  img
);

console.log(main);

dom.render(main);
