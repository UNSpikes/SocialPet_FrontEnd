import React from 'react';
import axios from 'axios';

import {Loading} from './../loading/loading';

export class SubmitFile extends React.Component{
	
	constructor(props){
		super(props)
		this.state ={
			file: null,
			loading: false
		}
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);

	}

	onChange(e){
		this.setState({file: e.target.files[0]});
		//console.log(e.target.files[0]);
	}

	onSubmit(e){
		console.log(this.state.file)
		e.preventDefault();
		const formData = new FormData();
		formData.append('body',this.state.file)
		let url = 'https://socialped-back-unal.herokuapp.com/certificados?tipo=raza&dog_id=2&user_id=2';
		//let url = 'https://socialped-back-unal.herokuapp.com/certificados';
		let config = {
					headers: {
						'Accept': '*/*',
						'Content-Type': 'application/form-data'
					}
				}
		this.setState({loading:true});	
		axios.post(
			///////////////////////////////////
			url,
			{	
				'Params':{
				'tipo': 'raza',
				'dog_id': '1',
				'user_id': '2'
				},
				'Body':{'ruta':this.state.file}
				
			},
			//////////////////////////////////
			config
			).then(res =>{
				this.setState({loading:false});
				console.log(res.data);
				console.log("hola")
			}).catch(error => {
				this.setState({loading:false});
				console.log(error)
			})
	}

	render(){
		let load = (<div></div>);
		if(this.state.loading){
			load = (<Loading/>);
		}else{
			load = (<div></div>);
		}
		return (
			<form onSubmit={this.onSubmit}>
				{load}
				<input type="file" name="file" onChange={this.onChange}/>
				<button type="submint"> Submint </button>
			</form>
		);
	}
}





















