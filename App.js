let heading  =  React.createElement(
    'h1',
    {id:'heading', abc:"xyz"},
    "Hello from React");
let root = ReactDOM.createRoot(document.getElementById("root"))
root.render(heading);