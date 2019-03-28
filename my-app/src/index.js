import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch, Redirect, HashRouter, MemoryRouter} from 'react-router-dom';
import Test1 from './test1';
import Test2 from './test2';
import Test3 from './test3';
import TheProps from './components/pages/learn/props';
import Life from './components/pages/learn/life';
import Parent from './components/pages/learn/propsParent';
import Form from './components/pages/learn/form';
import Prompt from './components/pages/learn/prompt';
import Error from './components/error/error';
import Navbar from './nav/nav';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';


//basename属性

//basename的作用是个我们增加一级导航目录，比如以前的导航目录是：http://localhost:1717/Jspangb 现在想访问同一个页面，但是路径变成http://localhost:1717/demo/Jspangb。这时候就可以使用basename属性来设置。basename属性是放在标签里边的。

//这个属性的作用是开启或者关闭React Router，也就是说如果你把forceRefresh的值设置成真，它将关闭React路由系统，而真实的去服务器端请求信息。

//现在我们把forceRefresh设置成true，你会发现路由已经不能使用了。

//5种路由方式

//我们一直在使用的路由方式是BrowserRouter，也就是浏览器的路由方式，其实React还有几种路由方式：

//BrowserRouter：浏览器的路由方式，也是我们一直在学习的路由方式，在开发中最常使用。
//HashRouter：在路径前加入#号成为一个哈希值。Hash模式的好处是，再也不会因为我们刷新而找不到我们的对应路径了。
//MemoryRouter：不存储history，所有路由过程保存在内存里，不能进行前进后退，因为地址栏没有发生任何变化。
//NativeRouter：经常配合ReactNative使用，多用于移动端，以后ReactNative课程中会详细讲解。
//StaticRouter：设置静态路由，需要和后台服务器配合设置，比如设置服务端渲染时使用。

ReactDOM.render(
    <Router basename="demo" forceRefresh={true}>
        <div>
            <Navbar/>
            <Switch>
                <Route exact path="/" component={Test1}/>
                <Route path="/test2" component={Test2}/>
                <Route path="/test3" component={Test3}/>
                <Route path="/props" component={TheProps}/>
                <Route path="/life" component={Life}/>
                <Route path="/parent" component={Parent}/>
                <Route path="/form/:param" component={Form}/>
                <Route path="/prompt" component={Prompt}/>
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
