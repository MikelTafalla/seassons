import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    //not required by react. It belongs to JS
    // One way to initialize state
    constructor(props) {
        super(props);

        this.state = { lat: null };

        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({ lat: position.coords.latitude })
            },
            err => console.log(err)
        );
    }

    //define render is a rect requirement to return a JSX
    render() {
        return <div>Latitude: {this.state.lat}</div>
    }
}

ReactDOM.render(
    <App />,
    document.querySelector("#root")
);