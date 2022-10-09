import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    //not required by react. It belongs to JS
    // One way to initialize state
    constructor(props) {
        super(props);

        this.state = { lat: null, errorMessage: '' };

        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({ lat: position.coords.latitude })
            },
            err => {
                this.setState({ errorMessage: err.message })
            }
        );
    }

    //define render is a react requirement to return a JSX
    render() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
            
        }
        if (!this.state.errorMessage && this.state.lat) {
            return <div>Latitude: {this.state.lat}</div>
            
        }

        return <div>Loading...</div> 

    }
}

ReactDOM.render(
    <App />,
    document.querySelector("#root")
);