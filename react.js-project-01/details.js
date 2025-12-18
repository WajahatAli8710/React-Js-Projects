function details() {
  let projectCount = React.createElement("div", { id: "projectCount" }, [
    React.createElement("h2", null, "+200"),
    React.createElement("p", null, "Project completed"),
  ]);

  let startupRaised = React.createElement("div", { id: "startupRaised" }, [
    React.createElement("h2", null, "+50"),
    React.createElement("p", null, "Startup raised"),
  ]);

  let topContent = React.createElement("div", { id: "topContent" }, [
    projectCount,
    startupRaised,
  ]);

  let bottomContent = React.createElement("div", { id: "bottomContent" }, [
    React.createElement("h1", null, "Hello"),
    React.createElement("p", null, "- It's D.Nova a design wizerd"),
  ]);

  let top = React.createElement("div", { id: "top" }, [
    topContent,
    bottomContent,
  ]);

  let bottom = React.createElement("div", { id: "bottom" }, [
    React.createElement("h4", null, "Scroll down"),
    React.createElement("i", { class: "ri-arrow-down-line" }, null),
  ]);

  return React.createElement("div", { id: "details" }, [top, bottom]);
}

export default details;
