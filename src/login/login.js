import React from 'react';
import {styles} from './loginStyle';
import '../login/style.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


export class LogIn extends React.Component{
	
	
	
	render(){
		let src = "https://www.anipedia.net/imagenes/taxonomia-perros.jpg";
		let facebook = 'https://icon-icons.com/icons2/555/PNG/512/facebook_icon-icons.com_53612.png';
		let google = 'https://elviejodragon.com/wp-content/uploads/2015/01/google__round_logo.png';
		let twitter = 'https://tarotdecarmenylidia.files.wordpress.com/2016/08/twitter-icon-770x769.png';
		return (
			<div className="loginBox">
				<a href={src}><img src={src} className="imagen"/></a>
				<div className="formBox">
					<h1>SocialPets</h1>
					<div className="list">
						<label>Ingresa</label>
						<div className="social">
							<a><img src={facebook} className="icon" /></a>
							<a><img src={google} className="icon" /></a>
							<a><img src={twitter} className="icon"/></a>
						</div>
						<label >o</label>
					</div>
					<div className="o">
						<input className="text" type="text" placeholder="Usuario"/>
						<input className="text" type="password" placeholder="Contraseña"/>
						<button className="button">Sig In</button>
					</div>
					<div className="links">
						<a>Olvidaste tu Contraseña</a>
						<a>No tienes cuenta?,<Link to="registrer">Creala ahora!</Link></a>
					</div>
				</div>
			</div>
		);
	};
}