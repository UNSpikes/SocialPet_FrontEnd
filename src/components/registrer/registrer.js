import React from 'react';
import {schema_1, blue_schema, registrerBox} from './registrerStyle'
import '../../components/registrer/style.css';

import {Loading} from './../loading/loading';


export class Registrer extends React.Component{

	constructor(props){
		super(props)
		this.state = {
			fields: {},
			errors: {},
			conditions: false,
			class_c: "checkbox",
			loading: false
		}
		this.handleChange = this.handleChange.bind(this)
		this.submitForm = this.submitForm.bind(this)
	}

	handleChange(e){
		let fields = this.state.fields;
		if(e.target.name.match("condiciones")){
			let bool = this.state.conditions;
			fields[e.target.name] = !bool	
			this.setState({conditions: !bool});
		}else{
			fields[e.target.name] = e.target.value;
		}
		this.setState({fields});
		console.log(this.state.fields);
	}


	submitForm(e){
		//e.preventDefault();
		if(this.validateForm()){
			let fields = {}
			fields["fisrtName"] = "";
			fields["lastName"] = "";
			fields["email"] = "";
			fields["phone"] = "";
			fields["address"] = "";
			fields["password"] = "";
			fields["secondPassword"] = "";
			// mandar el post
			//this.setState({loading: true});
			//this.setState({loading: false});
		}
	}

	validateForm(){
		let fields = this.state.fields;
		let errors = {}
		let isValid = true;

		if (!fields["fisrtName"]){
			isValid=false;
			errors["fisrtName"] = "Ingrese un Nombre";
		}else if(!fields["fisrtName"].match(/^[a-zA-Z ]*$/)){
			isValid = false;
			errors["fisrtName"] = "Ingrese un Nombre que Contenga Solo Caracteres Alfabeticos";
		}
		
		if (!fields["lastName"]){
			isValid=false;
			errors["lastName"] = "Ingrese un Apellido";
		}else if(!fields["lastName"].match(/^[a-zA-Z ]*$/)){
			isValid = false;
			errors["lastName"] = "Ingrese un Apellido que Contenga solo Caracteres Alfabeticos";	
		}

		if (!fields["email"]){
			isValid=false;
			errors["email"] = "Ingrese una Direccion de Correo";
		}else if(!fields["email"].match(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i)){
			isValid=false;
			errors["email"] = "Ingrese una Direccion de Correo Valida";
		}

		if (!fields["password"]){
			isValid=false;
			errors["password"] = "Ingrese una Contraseña";
		}else if(!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)){
			isValid = false;
			errors["password"] = "La Contraseña debe Tener una Mayuscula un Numero y un Caracter Especial";
		}

		if (!fields["secondPassword"]){
			isValid=false;
			errors["secondPassword"] = "Vuelva a Ingresar La Contraseña";
		}else if(!fields["secondPassword"].match(fields["password"])){
			isValid=false;
			errors["secondPassword"] = "Las Contraseñas no Coinciden";
		}

		if (typeof fields["phone"] !== "undefined"){
			if(!fields["phone"].match(/^[0-9]{10}$/)){
				isValid=false;
				errors["phone"] = "Numero Invalido";
			}
		}

		if(!(this.state.conditions)){
			isValid = false;
			this.setState({class_c: "alerta3"})
		}else{
			this.setState({class_c: "checkbox"})
		}
		

		this.setState({errors: errors});
		return isValid;
	}

	nothing(){

	}

	render(){
		let onClickSubmit = this.submitForm
		let loadingWindow = (<div></div>);
		if(this.state.loading === false){
			onClickSubmit = this.submitForm
			loadingWindow = (<div></div>);
		}else{
			onClickSubmit = this.nothing
			loadingWindow = <Loading/>;
		}

		return(
			<div className="registrerBox">
				{loadingWindow}
				<Loading/>
				<h1>Registrate</h1>
				<div className="form">
					<input type="text" placeholder="First Name" className="text" name="fisrtName" value={this.state.fields.fisrtName} onChange={this.handleChange}></input>
					<input type="text" placeholder="Last Name" className="text"	name="lastName" value={this.state.fields.lastName} onChange={this.handleChange}></input>
					<h5 className="alerta2">{this.state.errors.fisrtName}</h5>
					<h5 className="alerta2">{this.state.errors.lastName}</h5>
					<input type="text" placeholder="Email" className="text" name="email" value={this.state.fields.email} onChange={this.handleChange}></input>
					<input type="text" placeholder="Phone" className="text" name="phone" value={this.state.fields.phone} onChange={this.handleChange}></input>
					<h5 className="alerta2">{this.state.errors.email}</h5>
					<h5 className="alerta2">{this.state.errors.phone}</h5>
					<input type="text" placeholder="Address" className="text" name="address" value={this.state.fields.address} onChange={this.handleChange}></input> 
					<select className="text">
						<option value="" disabled selected>Select your City</option>
	  					<option value="Bogota">Bogota</option>
	  					<option value="Cali">Cali</option>
	  					<option value="Medellin">Medellin</option>
	  					<option value="Cartagena">Cartagena</option>
					</select>
					<h5 className="alerta2"></h5>
					<h5 className="alerta2"></h5>
					<input type="Password" placeholder="Password" className="text" name="password" value={this.state.fields.password} onChange={this.handleChange}></input>
					<input type="Password" placeholder="Confirm Password" className="text" name="secondPassword" value={this.state.fields.secondPassword} onChange={this.handleChange}></input>
					<h5 className="alerta2">{this.state.errors.password}</h5>
					<h5 className="alerta2">{this.state.errors.secondPassword}</h5>
				</div>
				<div className="acept">
					<label className={this.state.class_c} name="condiciones" ><input type="checkbox" name="condiciones" onClick={this.handleChange} value={this.state.fields.condiciones}/>I agree whit the terms and politics of privacity</label>
					<div className="buttonEfeccts">	
						<button className="button" onClick={onClickSubmit}>Create Acount</button>
					</div>
				</div>
			</div>
		);
	};
} 