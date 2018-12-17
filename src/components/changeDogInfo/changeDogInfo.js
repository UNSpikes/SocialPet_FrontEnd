import React from 'react';
import axios from 'axios';

import { serverLink } from '../../JS/constants/links';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export class ChangeDogInfo extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			fields:{}
		}
		this.handleChange = this.handleChange.bind(this);
		this.submitForm = this.submitForm.bind(this);
	}

	handleChange(e){
		let fields = this.state.fields;
		fields[e.target.name] = e.target.value;
		this.setState({fields});
		//console.log(this.state.fields);
	}

	submitForm(e){
		let link = serverLink + /dogs/+ this.props.dog;
		let confing = {
			headers: {
				'Accept': '*/*',
				'Content-Type': 'application/json',
				'Authorization': "token"
			}
		}

		let fieldsToChange = this.state.fields
		let fieldsToSend = {
			'name': fieldsToChange['name'],
			'age': fieldsToChange['age'],
			'sex': fieldsToChange['sex'],
			'description': fieldsToChange['description'],
			'interests': fieldsToChange['interests'],
		}
		axios.patch(link, fieldsToSendm, confing).then(
				result => {
					console.log("peticion exitosa")
					console.log(resul);
				}
			).catch(
				error => {
					console.log("error en la peticion")
					console.log(error)
				}
			)
	}

	render(){
		return(<div>
			<h1>ingrese los datos para cambiar la informacion del perro</h1>
			<input type="text" placeholder="Nombre del perro" className="text" name="name" value={this.state.fields.name} onChange={this.handleChange}></input>
			<input type="text" placeholder="Edad" className="text"	name="ege" value={this.state.fields.ege} onChange={this.handleChange}></input>
			<input type="text" placeholder="Sexo del can" className="text" name="sex" value={this.state.fields.sex} onChange={this.handleChange}></input>
			<input type="text" placeholder="descripcion" className="text" name="description" value={this.state.fields.description} onChange={this.handleChange}></input>
			<input type="text" placeholder="interests" className="text" name="interests" value={this.state.fields.interests} onChange={this.handleChange}></input> 
			<button className="button" onClick={this.submitForm}>Cambiar informacion</button>
					
		</div>)
	}

}