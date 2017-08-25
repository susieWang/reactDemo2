"use strict";
import React from "react";
import ReactDOM from "react-dom";
import AppComponent from './components/productBox.js';
import { Router, Route,IndexRoute,browserHistory,hashHistory} from 'react-router';
import App from "./pages/App";
import About from "./pages/About";
import Home from "./pages/Home";


//ReactDOM.render(<AppComponent/>,document.getElementById('content'));
ReactDOM.render(
    <Router history={hashHistory}>
      <Route path="/" component={App}>
      	<IndexRoute component={Home}/>
      	<Route path="/index" component={Home}/>
	  	<Route path="/about" component={About}/>
	  </Route>
    </Router>,
    document.getElementById('content')
);
//如果要是用hot-middleware，需要添加
// if(module.hot) {
//     module.hot.accept();
// }