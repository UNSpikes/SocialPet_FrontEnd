import React from 'react';

import '../../components/loading/style.css'

export class Loading extends React.Component{

	constructor(props){
		super(props)
	}


	render(){
		let message = 'Cargando...';
		if(typeof(this.props.message) !== "undefined"){
			message = this.props.message;
		} 
		return(
			<div className="loading">
				<div className="loader"></div>
				<h3>{message}</h3>
			</div>
		);
	}
}