import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Test1 from './test1';
import Test2 from './test2';
import Test3 from './test3';
import TheProps from './components/pages/learn/props';
import Life from './components/pages/learn/life';
import Parent from './components/pages/learn/propsParent';
import Error from './components/error/error';
import Navbar from './nav/nav';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Router>
        <div>
            <Navbar/>
            <Switch>
                <Route exact path="/" component={Test1}/>
                <Route path="/test2" component={Test2}/>
                <Route path="/test3" component={Test3}/>
                <Route path="/props" component={TheProps}/>
                <Route path="/life" component={Life}/>
                <Route path="/parent" component={Parent}/>
                <Redirect from="/redirect" to="/test3"/>
                <Route component={Error}/>
            </Switch>
        </div> 
    </Router>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
