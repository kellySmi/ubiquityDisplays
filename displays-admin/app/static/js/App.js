import '../css/styles.css'
import React from "react";
import PropTypes from  'prop-types';
import Header from "./components/common/header";
import  { Container } from 'semantic-ui-react';
//import NavTabs from './components/common/nav-tabs';
//import routes from './routes';  

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
       // console.log("render");
        return (
            <Container>
                <Header />
                {this.props.children}
             </Container>
        );
  }
}
//App.propTypes = {children:PropTypes.object.isRequired};
export default App;

/*<NavTabs />*/