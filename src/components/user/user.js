import React from 'react';

import { connect } from 'react-redux';

import { NavBar } from './../navBar/navbar';
import { SubmitFile } from 		'./../submitFile/submitFile';
import { ViewDocument } from 	'./../viewDocument/viewDocument';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import axios from 'axios';

import '../../components/user/style.css';

import {serverLink } from '../../JS/constants/links';

const mapStateToProps = state => {
	//console.log(state.renderD.dogs);
	return {
		tokens: state.authentic.tokens,
	};
}


class connectUser extends React.Component {
	constructor(props){
		super(props);
		console.log(this.props.dogs);
		this.state = {
			filters: {
				edge: "0",
				breed: "",
				location: "",
			}
		};
		this.handleChange = this.handleChange.bind(this);
		this.search = this.search.bind(this);
		this.componentDidMount = this.componentDidMount.bind(this)
	}

	handleChange(e){
		let filters = this.state.filters;
		filters[e.target.name] = e.target.value;
		this.setState({filters});
	}

	componentDidMount(){
		let config = {
			headers: {//127.0.0.1
						//192.168.42.53
				'Accept': '*/*',
			}
		}
		axios.get(
			//'https://socialped-back-unal.herokuapp.com/breeds',
			//'http://192.168.0.125:3000/users/1/info',
			serverLink + '/breeds',
			config
			).then(res =>{
				console.log(res.data);
				let dogs = []
				let i = 0, cont = 0;
				for (i = 0; i < res.data.length; i++){
					for (let j = 0; j < res.data[i].dogs.length; j++){
						dogs.push(res.data[i].dogs[j]);
						cont++;
					}
				};
				this.setState({dogs:dogs})
			}).catch(
				function (error){console.log(error)}
			);

	}

	search(e){
		let link = serverLink +'breeds/' ;
		if(this.state.filters.breed !== ''){
			link  += 'showname/' + this.state.filters.breed;
		}
		let config = {
			headers: {
				'Accept': '*/*',
			}
		}

		axios.get( link, config ).then(res =>{
			
			let dogs = []
			let i = 0, cont = 0;
			for (i = 0; i < res.data.length; i++){
				for (let j = 0; j < res.data[i].dogs.length; j++){
					dogs.push(res.data[i].dogs[j]);
					cont++;
				}
			};
			this.setState({dogs: dogs});
			}).catch(
				function (error){console.log(error)}
			);
	}

	render(){

		let dogs = (<div></div>);
		if(typeof(this.state.dogs) !== "undefined" ){
			dogs = (
				<div className="lista-perros">
					{this.state.dogs.map(dog => (<div>{dog.name}</div>))}
				</div>
			)
		}
		return (
			<div>
				<NavBar logIn="false" sigIn="false"/>
				<SubmitFile/>
				<ViewDocument/>
				<Link to="perfil">Ir a perfil</Link>
				<div className="inicio">
					<div className="filtros">
						<div className="raza">
							<input type="text" className="buscarRaza" placeholder="Escriba su raza aqui" name="breed" value={this.state.breed} onChange={this.handleChange}/>
						</div>
						<div className="edad">
							<label>Edad maxima</label>
							<input type="range" nim="0" max="25" step="1"  className="rangoEdad" name="edge" value={this.state.edge} onChange={this.handleChange}/>
							<label>{this.state.filters.edge}</label>
						</div>
						<div className="localizaion">
							<input type="text" className="localizaion" name="location" placeholder="Direccion o Lugar de Referencia" value={this.state.location} onChange={this.handleChange}/>
						</div>
						<button onClick={this.search}>Buscar</button>
					</div>
					
					{dogs}
				</div>

				<ul >
					{this.props.tokens.map(el => ( <li  key={el.id}> {el.token} </li> ))}
				</ul>
				
			</div>
		);
	}
}
/*
const connectUser = ({tokens}) =>(
	<div>
		<NavBar/>
		<div className="filtros">
			<div className="raza">
				<input type="text" className="buscarRaza" placeholder="Escriba su raza aqui"/>
			</div>
			<div className="edad">
				<label>Edad maxima</label>
				<input type="range" nim="0" max="25" step="1"  className="buscarRaza" />
			</div>
			<div className="localizaion">
			
			</div>
		</div>
		<ul >
			{tokens.map(el => ( <li  key={el.id}> {el.token} </li> ))}
		</ul>
	</div>
);
*/
export const User = connect(mapStateToProps)(connectUser);
