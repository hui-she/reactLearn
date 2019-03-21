import React from 'react';
import {NavLink} from 'react-router-dom';
import "./nav.scss"
const NavBar = () => (
    <div>
        <div>
            <NavLink exact to="/" className="blue">首页</NavLink> |&nbsp;
            <NavLink to="/test2" activeClassName="active">页面A</NavLink> |&nbsp;
            <NavLink to="/test3" activeClassName="active">页面B</NavLink> |&nbsp;
            <NavLink to="/react" activeClassName="active">404</NavLink> |&nbsp;
            <NavLink to="/redirect" activeClassName="active">Redirect</NavLink> |&nbsp;
        </div>
    </div>
)

export default NavBar;