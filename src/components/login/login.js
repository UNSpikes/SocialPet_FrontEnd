import React from 'react';
import {styles} from './loginStyle';
import '../../components/login/style.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from 'react-redux';
import { setToken } from '../../JS/actions/index';
import { addListDogs } from '../../JS/actions/index';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

const mapDispatchToProps = dispatch => {
	return{
		setToken: token => dispatch(setToken(token)),
		addListDogs: dogList => dispatch(addListDogs(dogList)) 
	};
};

class LogInForm extends React.Component{
	
		constructor(){
		super()
		this.state = {	user: '',
						password: '',
						userError: '',
						passwordError: '',
						redirect: false
					}
		this.handleUser = this.handleUser.bind(this);
		this.handlePassword = this.handlePassword.bind(this);
		this.submitLogIn = this.submitLogIn.bind(this);
	}

	handleUser(e){
		this.setState({user: e.target.value});
	}

	handlePassword(e){
		//Must be at least 8 characters
		//At least 1 special character from @#$%&
		//At least 1 number, 1 lowercase, 1 uppercase letter
		this.setState({password: e.target.value})
	}



	submitLogIn(e){
		let isValid = true;
		if(this.state.user === ''){
			this.setState({userError: 'Ingrese un usario'});
			isValid = false;	
		}else{
			this.setState({userError: ''});
		}
		if(this.state.password === ''){
			this.setState({passwordError: 'Ingrese la Contraseña'})
			isValid = false;
		}else{
			this.setState({passwordError: ''})
		}
		if(isValid){
			//enviar
			let token = 'token';
			let id = 1;
			this.props.setToken({token, id});
			this.setState({redirect: true});
			

		}
	}




	render(){
		let src = "https://www.anipedia.net/imagenes/taxonomia-perros.jpg";
		let facebook = 'https://icon-icons.com/icons2/555/PNG/512/facebook_icon-icons.com_53612.png';
		let google = 'https://elviejodragon.com/wp-content/uploads/2015/01/google__round_logo.png';
		let twitter = 'https://tarotdecarmenylidia.files.wordpress.com/2016/08/twitter-icon-770x769.png';

		if (this.state.redirect){
			let list = this.getDogs()
			this.props.addListDogs({list})
			return (<Redirect to="/user"/>);
		}else{
			return (
				<div className="loginBox">
					<a href={src}><img src={src} className="imagen"/></a>
					<div className="formBox">
						<Link style={{ textDecoration: 'none' }} className="option" to="/home"><h1>SocialPets</h1></Link>
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
							<input className="text" type="text" placeholder="Usuario" onChange={this.handleUser}  value={this.state.user}/>
							<h5 className="alerta">{this.state.userError}</h5>
							<input className="text" type="password" placeholder="Password" onChange={this.handlePassword} value={this.state.password}/>
							<h5 className="alerta">{this.state.passwordError}</h5>
							<button className="button1" onClick={this.submitLogIn} >Sig In</button>
						</div>
						<div className="links">
							<a>Olvidaste tu Contraseña</a>
							<a>No tienes cuenta?,<Link to="registrer">Creala ahora!</Link></a>
						</div>
					</div>
				</div>
			);
		}
	};
}

export const LogIn = connect(null, mapDispatchToProps)(LogInForm);

