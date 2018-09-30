import React from 'react';
import {schema_1, blue_schema, registrerBox} from './registrerStyle'
import '../registrer/style.css'

export class Registrer extends React.Component{

	render(){
		return(
			<div className="registrerBox">
				<h1>Registrate</h1>
				<div className="form">
					<input type="text" placeholder="First Name" className="text"></input>
					<input type="text" placeholder="Last Name" className="text"	></input>
					<input type="text" placeholder="Email" className="text" ></input>
					<input type="text" placeholder="Phone" className="text" ></input>
					<input type="text" placeholder="Address" className="text" ></input> 
					<select className="text">
						<option value="" disabled selected>Select your City</option>
	  					<option value="Bogota">Bogota</option>
	  					<option value="Cali">Cali</option>
	  					<option value="Medellin">Medellin</option>
	  					<option value="Cartagena">Cartagena</option>
					</select>
					<input type="Password" placeholder="Password" className="text" ></input>
					<input type="Password" placeholder="Confirm Password" className="text" ></input>
				</div>
				<div className="acept">
					<label className="checkbox"><input type="checkbox"/>I agree whit the terms and politics of privacity</label>
					<button className="button">Create Acount</button>
				</div>
			</div>
		);
	};
} 