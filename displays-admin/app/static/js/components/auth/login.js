import React from 'react';

export default class Dashboard extends React.Component {
	constructor(props) {
        super(props);
    }
    
    render(){
		return (
			<ul>
            <li><a href="">Register</a></li>
            <li><a href="">Log In</a></li>
            </ul>
        )
    }
}
