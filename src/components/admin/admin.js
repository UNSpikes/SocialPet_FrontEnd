import React from 'react';
import axios from 'axios';
import {serverLink } from '../../JS/constants/links';

export class Admin extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			error: '',
			raza : ''
		}
		this.handleChange = this.handleChange.bind(this);
		//this.createBreed = this.createBreed.bind(this);
		//this.dropBreed = this.dropBreed.bind(this)
		this.changeBreed = this.changeBreed.bind(this);
	}

	handleChange(event){
		let raza = event.target.value;
		this.setState({raza: raza})
	}

	changeBreed(event){
		//console.log(event.target.value)
		let link = serverLink + '/breeds' ;
		if(this.state.raza === '' ){
			this.setState({error:"Por favor escriba una raza primero"})
		}else{
			if(event.target.value === "create"){
				let config = {
					headers: {
						'Accept': '*/*',
						'Content-Type': 'application/x-www-form-urlencoded'
					}
				}
				axios.post(link,{breed_type: "can"}, config).then(
					res => {console.log(res.data)}).catch(
					function (error){console.log(error)
				});
			}else{
				let config = {
					headers: {
						'Accept': '*/*'
					}
				}
				link += "/deletename/" + this.state.raza;
				axios.delete(link, config).then(
					res => {console.log("delete successful")}).catch(
					function (error){console.log(error)
				});
			}
		}
	}

	/*
	createBreed(event){
		
	}

	
	dropBreed(event){
		
	}
	*/
	render(){
		return(
			<div>
				<label>A continuacion escriba la raza que desea eliminar o crear</label>
				<input type="text" placeholder="Raza" value={this.state.raza} onChange={this.handleChange}/>
				<label>{this.state.error}</label>
				<button onClick={this.changeBreed} value="create">Crear</button>
				<button onClick={this.changeBreed} value="drop">Eliminar</button>
			</div>
		)
	}
}
