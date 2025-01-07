const heading = React.createElement("h1", { id: "heading" }, "hello world!! ")
const root = ReactDOM.createRoot(document.getElementById("root"))
const parent = React.createElement("div", { id: "parent"},[
    React.createElement("div", {id: "child"}, 
    [ React.createElement("h1", { id: "heading" }, "child1"),
    React.createElement("h1", { id: "headings" }, "child2 ")]
    ),
    React.createElement("div", {id: "child"}, 
    [ React.createElement("h1", { id: "heading" }, "child3"),
    React.createElement("h1", { id: "headings" }, "child4 ")]
    )
])
console.log(parent)
root.render(parent)