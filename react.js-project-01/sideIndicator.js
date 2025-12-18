function indicator() {
  let year = React.createElement("h4", { id: "year" }, "2024");
  let line = React.createElement("h4", { id: "line" }, null);
  let label = React.createElement("h4", { id: "label" }, "product designer");

  return React.createElement("div", { id: "side-indicator" }, [
    label,
    line,
    year,
  ]);
}

export default indicator;
