const parent = React.createElement
("div", 
{id: "parent"},
[ React.createElement(
    "div",
     {id: "child1"},
      [React.createElement("h1",{},"I am a h1 tag brotha"),
      React.createElement("h2",{},"I am a h2 tag brotha")] 
      )],
      [React.createElement(
        "div",
         {id: "child2"},
          [React.createElement("h1",{},"I am a h1 tag brotha"),
          React.createElement("h2",{},"I am a h2 tag brotha")] 
          )]

    );

    

// const heading = React.createElement("h1",{id: "heading"},"Welcome to the React course!");
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
