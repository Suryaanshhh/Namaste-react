import React from "react";
import ReactDOM from "react-dom/client"



const heading = React.createElement("h1", { id: "heading" }, "Hello Nigga");

//nested reactelements

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "i am h1 nigga"),
    React.createElement("h2", {}, "i am h2 nigga"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "i am h1 nigga"),
    React.createElement("h2", {}, "i am h2 nigga"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
