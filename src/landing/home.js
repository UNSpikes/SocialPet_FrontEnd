import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../landing/style.css';

export class Home extends React.Component{

	render(){
		return(
			<div>
				<div className="navBar">
					
					<h1 className="title">SocialPet</h1>
					<Link style={{ textDecoration: 'none' }} className="option" to="/login">Log In</Link>
					<Link style={{ textDecoration: 'none' }} className="option" to="/registrer">sig In</Link>
					<Link style={{ textDecoration: 'none' }} className="option" to="/home" >Explore</Link>
					<Link style={{ textDecoration: 'none' }} className="option" to="/home">More</Link>
	
				</div>
				<div className="presentation">
					<h1>SocialPet</h1>
					<div className="tow">
						<Link style={{ textDecoration: 'none', marginLeft: '20em' }} to="/login"> login</Link>
						<Link style={{ textDecoration: 'none', marginRight: '20em' }} to="/registrer"> registrer</Link>
					</div>
					<p>La mejor manera de cuidar <br/> a tu mejor amigo </p>
				</div>
			</div>
		);
	};
}