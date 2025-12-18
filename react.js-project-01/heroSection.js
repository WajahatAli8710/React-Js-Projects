import sideIndicator from "./sideIndicator.js";

import details from "./details.js";

let heroSection = React.createElement("div", { id: "heroSection" }, [
  React.createElement(sideIndicator),
  React.createElement(details),
]);

export default heroSection;
