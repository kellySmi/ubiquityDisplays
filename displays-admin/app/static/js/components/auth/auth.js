import React from 'react';

export default class Auth extends React.Component {
	constructor(props) {
        super(props);
    }

    render(){
		return (
			<ul>
            <li><a href="">Register</a></li>
            <li><a href="#" onClick={checkLogin()}>Log In</a></li>
            </ul>

        )
    }
}
var checkLogin = ()=>{
	
};