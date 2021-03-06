import React from 'react';
import {NavLink} from 'react-router-dom';
import "./nav.scss"
const NavBar = () => (
    <div>
        <div>
            <NavLink exact to="/" className="blue">首页</NavLink> |&nbsp;
            <NavLink to="/test2" activeClassName="active">数组</NavLink> |&nbsp;
            <NavLink to="/test3" activeClassName="active">state</NavLink> |&nbsp;
            <NavLink to="/props" activeClassName="active">props和组件</NavLink> |&nbsp;
            <NavLink to="/life" activeClassName="active">生命周期</NavLink> |&nbsp;
            <NavLink to="/parent" activeClassName="active">props.children</NavLink> |&nbsp;
            <NavLink to="/form/caiji" activeClassName="active">表单和路由传参</NavLink> |&nbsp;
            <NavLink to="/prompt" activeClassName="active">prompt</NavLink> |&nbsp;
            <NavLink to="/react" activeClassName="active">404</NavLink> |&nbsp;
            <NavLink to="/redirect" activeClassName="active">Redirect</NavLink> |&nbsp;
        </div>
    </div>
)

export default NavBar;