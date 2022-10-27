import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import CardList from "../components/CardList";
import Scroll from "../components/Scroll";
import SearchBox from "../components/SearchBox"
import ErrorBoundry from "../components/ErrorBoundry";
import Header from "../components/Header";
import { setSearchField, requestrobots } from "../actions";

const App = () => {
    const searchField = useSelector(state => state.searchRobots.searchField);
    const robots = useSelector(state => state.requestRobots.robots);
    const isPending = useSelector(state => state.requestRobots.isPending);

    const dispatch = useDispatch();

    const onSearchChange = (e) => {
        dispatch(setSearchField(e.target.value));
    }

    useEffect(() => {
        dispatch(requestrobots());
    }, []);

    const filteredRobots = robots.filter(robot => robot.name.toLowerCase().includes(searchField.toLowerCase()));

    return isPending ? <h1>Loading</h1> :
        (

            <div className="tc" >
                <Header />
                <SearchBox searchChange={onSearchChange} />
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filteredRobots} />
                    </ErrorBoundry>
                </Scroll>
            </div >
        )
}

export default App; 