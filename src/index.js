import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    //not required by react. It belongs to JS
    // One way to initialize state
    constructor(props) {
        super(props);

        this.state = { lat: null };
    }

    //define render is a rect requirement to return a JSX
    render() {
        window.navigator.geolocation.getCurrentPosition(
            position => console.log(position),
            err => console.log(err)
        );
        return <div>Latitude:</div>
    }
}

ReactDOM.render(
    <App />,
    document.querySelector("#root")
);