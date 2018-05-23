import React from 'react';
import { Nav, NavItem } from "react-bootstrap";

export default class ActionBar extends React.Component {
	constructor(props) {
        super(props);
  }
  
  render(){
		  return (
        <div>
  			  <input type="button" className="button  button-primary" onClick={this.props.onButtonClick} id="addButton" value="Add"/>
        </div>
      )
    }
}
