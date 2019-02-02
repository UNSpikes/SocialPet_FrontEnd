import React from 'react';
import './style.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Redirect } from 'react-router-dom';
import { RM_SESION } from './../../JS/constants/api'

export class NavBar extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		let IsLogged = localStorage.getItem("IsLogged");
		let login = (<Link style={{ textDecoration: 'none' }} className="option" to="/login">Log In</Link>);
		let sigin = (<Link style={{ textDecoration: 'none' }} className="option" to="/registrer">sig In</Link>);
		let blogs = (<Link style={{ textDecoration: 'none' }} className="option" to="/blogs">Blogs</Link>);
		let logout = (<Link style={{ textDecoration: 'none' }} className="option" to="/home">
										<div onClick={() => {RM_SESION()}}>LogOut</div>
									</Link>);
		let explore = (<Link style={{ textDecoration: 'none' }} className="option" to="/home" >Explore</Link>);
		let more =	(<Link style={{ textDecoration: 'none' }} className="option" to="/home">More</Link>);
		let match = (<Link style={{ textDecoration: 'none' }} className="option" to="/home">Match</Link>);
		let profile = (<Link style={{ textDecoration: 'none' }} className="option" to="/home">Profile</Link>);
		let window = "";

		if (IsLogged === "true") {
			window = 
			<div className="navBar">
				<h1 className="title">SocialPet</h1>
				{blogs}
				{match}
				{more}
				{profile}
				{logout}
			</div>
		}else{
			window = 
			<div className="navBar">
				<h1 className="title">SocialPet</h1>
				{login}
				{sigin}
				{blogs}
				{explore}
				{more}
			</div>
		}
		return (
			<div>{window}</div>
		)
	}
}
