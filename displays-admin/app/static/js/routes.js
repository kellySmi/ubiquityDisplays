import React from 'react';  
import App from './App';
import { Route } from 'react-router-dom' 
import HomePage from './components/home/homePage';  
import DisplaysPage from './components/displays/displaysPage'; 
import ClientsPage from './components/clients/clientsPage'; 
import SequencesPage from './components/sequences/sequencesPage';  
import  { Container } from 'semantic-ui-react';

export default (  
	<Container>
		<Route path="/" component={App} />
    	<Route path="/" component={HomePage} />
    	<Route path="/displays" component={() => (<HomePage activeTab="displays" />)} />
    	
  	</Container>
);