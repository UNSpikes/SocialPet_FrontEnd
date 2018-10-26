import React from 'react';
import { connect } from 'react-redux';
import { NavBar } from './../navBar/navbar';
import axios from 'axios';
import '../../components/user/style.css';

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
				location: "",
			}
		};
		this.handleChange = this.handleChange.bind(this);
		this.search = this.search.bind(this);
		this.getDogs - this.getDogs.bind(this);
	}

	handleChange(e){
		let filters = this.state.filters;
		filters[e.target.name] = e.target.value;
		this.setState({filters});
	}

	getDogs(){
		let config = {
			headers: {
				'Accept': '*/*',
			}
		}
		axios.get(
			'https://socialped-back-unal.herokuapp.com/breeds',
			config
			).then(res =>{
				let dogs = []
				let i = 0, cont = 0;
				for (i = 0; i < res.data.length; i++){
					for (let j = 0; j < res.data[i].dogs.length; j++){
						dogs.push(res.data[i].dogs[j]);
						cont++;
					}
				};
				return dogs;
			}).catch(
				function (error){console.log(error)}
			);

	}



	search(e){
		let link = 'https://socialped-back-unal.herokuapp.com/breeds/' ;
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

		let listDogs = this.getDogs();
		let dogs = (<div></div>);

		if(typeof(listDogs) !== "undefined" ){
			dogs = (
				<div className="lista-perros">
					{listDogs.map(dog => (<div>{dog.name}</div>))}
				</div>
			)
		}

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
