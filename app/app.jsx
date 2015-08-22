import React from "react";

const App = React.createClass({
    render() {
        console.log("App rendered!");
        return <div id="App">
            <h1>Hello World</h1>
            <div>The DOM is your oyster!</div>
        </div>
    }
});

export default App;
