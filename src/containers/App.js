import React, { Component } from "react";
import "./App.css";
import CardList from "../components/CardList";
import Scroll from "../components/Scroll";
import SearchBox from "../components/SearchBox"
import ErrorBoundry from "../components/ErrorBoundry";

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchField: ""
        };
    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value });
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users").then(repsonse => repsonse.json()).then(data => this.setState({ robots: data }));
    }

    render() {
        const { robots, searchField } = this.state
        const filteredRobots = robots.filter(robot => robot.name.toLowerCase().includes(searchField.toLowerCase()));

        return !robots.length ? <h1>Loading</h1> :
            (

                <div className="tc" >
                    <h1 className="f1">RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filteredRobots} />
                        </ErrorBoundry>
                    </Scroll>
                </div >
            )
    }
}

export default App;

