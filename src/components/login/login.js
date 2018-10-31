import React from 'react';

import {styles} from './loginStyle';
import '../../components/login/style.css'

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import { setToken } from '../../JS/actions/index';
import { addListDogs } from '../../JS/actions/index';

import axios from 'axios';
import { serverLink } from '../../JS/constants/links';
import GoogleLogin from 'react-google-login';

import {Loading} from './../loading/loading';

import { googleID, googleSecretoCliente } from '../../JS/constants/clientGoogle';

import perros from '../../assets/taxonomia-perros.jpg';

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
						redirect: false,
						loading: false
					}
		this.handleUser = this.handleUser.bind(this);
		this.handlePassword = this.handlePassword.bind(this);
		this.submitLogIn = this.submitLogIn.bind(this);
		this.responseGoogle = this.responseGoogle.bind(this);
	}


	responseGoogle (response) {
  	//console.log(response);
  	let token = '';
	let id = 1;
	let link = serverLink + '/auth/google/token';
	let config = {
			headers: {
				'Accept': '*/*',
				'Content-Type': 'application/json'
			}
		}
	this.setState({loading: true})
 	axios.post(link, { "auth": { "tokenId": response.tokenId} }, config).then(
		res => {
			if(res.status === 201 ){
				token = response.tokenId;
				this.props.setToken({token, id});
				this.setState({redirect: true});
				//console.log(res)
				this.setState({loading: false})
			}else{
				this.setState({loading: false})
				this.setState({userError: "Usuario o Contraseña incorrectos"})
			}
		}).catch(
			/*
			function (error){

				console.log(this.state.loading);
				//console.log(error);

				//this.setState({loading: false});
			}
			*/
			error => {
				console.log(this.state.loading);
				console.log(error);
				this.setState({loading: false});
			}
		)
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
			let token = '';
			let id = 1;
			let link = serverLink + 'user_token';
			let config = {
					headers: {
						'Accept': '*/*',
						'Content-Type': 'application/json'
					}
				}
			this.setState({loading: true})
			axios.post(link, {"auth": {"email": this.state.user, "password": this.state.password}}, config).then(
				res => {
					if(res.status === 201 ){
						token = res.data.jwt;
						this.props.setToken({token, id});
						this.setState({redirect: true});
						//console.log(res)
						this.setState({loading: false})
					}else{
						this.setState({userError: "Usuario o Contraseña incorrectos"})
						this.setState({loading: false})
					}
				}).catch(
					error => {
						console.log(this.state.loading);
						console.log(error);
						this.setState({loading: false});
					}
				)
					

		}
	}

	nothing(event){
	}


	render(){
		let facebook = 'https://icon-icons.com/icons2/555/PNG/512/facebook_icon-icons.com_53612.png';
		let onChangeUser = this.handleUser;
		let onChangePassword = this.handlePassword;
		let onClickSubmit = this.nothing;
		let loadingWindow = (<div></div>);
		if(this.state.loading === false){
			onClickSubmit = this.submitLogIn
			loadingWindow = (<div></div>);
		}else{
			onClickSubmit = this.nothing
			loadingWindow = <Loading/>;
		}

		if (this.state.redirect){
			return (<Redirect to="/user"/>);
		}else{
			return (
				<div>
				{loadingWindow}
				<div className="loginBox">
					<a><img src={perros} className="imagen"/>
					</a>
					<div className="formBox">
						<Link style={{ textDecoration: 'none' }} className="option" to="/home"><h1>SocialPets</h1></Link>
						<div className="list">
							<label>Ingresa</label>
							<div className="social">
								<a className="icon"> 

								</a>
								<a >
									<GoogleLogin
										buttonText=''
									    className="icon google"
									    clientId={googleID}
									    onSuccess={this.responseGoogle}
									    onFailure={this.responseGoogle}
								  	/>
								</a>
							</div>
							<label >o</label>
						</div>
						<div className="o buttonEfeccts">
							<input className="text" type="text" placeholder="Email" onChange={onChangeUser}  value={this.state.user}/>
							<h5 className="alerta">{this.state.userError}</h5>
							<input className="text" type="password" placeholder="Password" onChange={onChangePassword} value={this.state.password}/>
							<h5 className="alerta">{this.state.passwordError}</h5>
							<button className="button1" onClick={this.submitLogIn} >Sig In</button>
						</div>
						<div className="links">
							<a>Olvidaste tu Contraseña</a>
							<a>No tienes cuenta?,<Link to="registrer">Creala ahora!</Link></a>
						</div>
					</div>
				</div>
				</div>
			);
		}
	};
}

export const LogIn = connect(null, mapDispatchToProps)(LogInForm);

