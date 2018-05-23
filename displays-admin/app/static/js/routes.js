import React from 'react';  
import App from './App';
import { Route } from 'react-router-dom' 
import HomePage from './components/home/homePage';  

export default (  
	<div>
		<Route path="/" component={App} />
    	<Route path="/" component={HomePage} />
    	<Route path="/displays" component={() => (<HomePage activeTab="displays" />)} />
    	<Route path="/clients" component={() => (<HomePage activeTab="clients" />)} />
    	<Route path="/sequences" component={() => (<HomePage activeTab="seq" />)} />
  	</div>
);