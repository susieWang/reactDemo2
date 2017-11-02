"use strict";
import React,{Component} from 'react';
import ProductBox from '../components/productBox';

export default class Home extends Component{
	render(){
		return (<div>
			<h1>this is home page</h1>
			<ProductBox />
		</div>);
	}
}