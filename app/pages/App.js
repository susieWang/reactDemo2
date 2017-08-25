"use strict";
import React,{Component} from 'react';
import { Link } from 'react-router';
import '../styles/common.less';


export default class App extends Component{
	render(){
		return (
			<div>
		        <h1>React Router Tutorial</h1>
		        <ul role="nav">
		          <li><Link to="/index">首页</Link></li>
		          <li><Link to="/about">关于</Link></li>
		        </ul>

 		       {/* 注意这里将子组件渲染出来 */}
        		{this.props.children}
      		</div>
		);
	}
}