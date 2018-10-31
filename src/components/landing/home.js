import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../../components/landing/style.css';
import { NavBar } from './../navBar/navbar';

export class Home extends React.Component{


	render(){
		return(
			<div>
				<NavBar logOut="false"/>
				<div className="presentation">
					<h1>SocialPet</h1>
					<div className="tow">
						<Link style={{ textDecoration: 'none', marginLeft: '20em' }} to="/login" > login</Link>
						<Link style={{ textDecoration: 'none', marginRight: '20em' }} to="/registrer"> registrer</Link>
					</div>
					<p>La mejor manera de cuidar <br/> a tu mejor amigo </p>
				</div>
			</div>
		);
	};
}