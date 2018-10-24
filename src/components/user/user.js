import React from 'react';
import { connect } from 'react-redux';
import { NavBar } from './../navBar/navbar';
import axios from 'axios';

const mapStateToProps = state => {
	console.log(state.tokes)
	return {tokens: state.tokens};
}


class connectUser extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			filters: {
				edge: "0",
				breed: "",
				location: ""
			}
		};
		this.handleChange = this.handleChange.bind(this);
		this.search = this.search.bind(this);
	}

	handleChange(e){
		let filters = this.state.filters;
		filters[e.target.name] = e.target.value;
		this.setState({filters});
	}

	search(e){
		let config = {
			headers: {
				'Accept': '*/*',
				'User-Agent': 'Rigor API Tester'
			}
		}
		axios.get('https://socialped-back-unal.herokuapp.com/breeds',config).then(res =>{ console.log(res.data)}).catch(
				function (error){console.log(error)}
			)

		/*
		axios.get('https://socialped-back-unal.herokuapp.com/breeds/showname/chanda').then(
			res => {
				console.log("hola mundo")
				console.log(res.data);
				console.log(this.state);
			}
		).catch(function (error) {console.log(error)});
		*/
	}

	render(){
		return (
			<div>
				<NavBar/>
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
