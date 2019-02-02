import React from 'react';
import './style.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Redirect } from 'react-router-dom';

export class NavBar extends React.Component{ 
  constructor(props){
    super(props);
  }
  
  render(){
    	let login = (<Link style={{ textDecoration: 'none' }} className="option" to="/login">Log In</Link>);  
		let sigin =	(<Link style={{ textDecoration: 'none' }} className="option" to="/registrer">sig In</Link>);
		let perfil =(<Link style={{ textDecoration: 'none' }} className="option" to="/personal">Perfil</Link>);
		let blogs =	(<Link style={{ textDecoration: 'none' }} className="option" to="/blogs">Blogs</Link>);
		let logout =(<Link style={{ textDecoration: 'none' }} className="option" to="/home">LogOut</Link>);

		if(typeof(this.props.logIn)!== "undefined"){
			login = <a></a>;
		}
		if(typeof(this.props.sigIn)!== "undefined"){
			sigin = <a></a>;
		}
		if(typeof(this.props.perfil)!== "undefined"){
			perfil = <a></a>;
		}
		if(typeof(this.props.logOut)!== "undefined"){
			logout = <a></a>;
		}
		return (<div className="navBar">
			<h1 className="title">SocialPet</h1>
			{login}
			{sigin}
			{perfil}
			{ blogs }
			{logout}
			
		</div>)
	}
}
