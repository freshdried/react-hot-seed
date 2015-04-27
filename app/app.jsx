import React from "react"

class App extends React.Component {
    render() {
        return <div>
            <h1>Hello World</h1>
            <div>The DOM is your oyster!</div>
        </div>
    }
}
React.render(<App />, document.body);
