import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { State } from './redux';
import { Home } from './Home';

function mapStateToProps(state: State) {
    return state;
}

const App = connect(mapStateToProps)(() => (
    <>
        <Switch>
            <Route path="/" exact component={Home} />
        </Switch>
    </>
));
export default App;
