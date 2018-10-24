import React from 'react';
import {styles} from './navbarStyle';
import '../../components/navBar/style.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Redirect } from 'react-router-dom';


export const NavBar = () => (
	<div className="navBar">
		<h1 className="title">SocialPet</h1>
		<Link style={{ textDecoration: 'none' }} className="option" to="/login">Log In</Link>
		<Link style={{ textDecoration: 'none' }} className="option" to="/registrer">sig In</Link>
		<Link style={{ textDecoration: 'none' }} className="option" to="/home" >Explore</Link>
		<Link style={{ textDecoration: 'none' }} className="option" to="/home">More</Link>
	</div>
)
