import React from 'react';
import axios from 'axios';

import { serverLink } from '../../JS/constants/links';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";


export class DogInfo extends React.Component{
	
	constructor(props){
		super(props);
		this.state = {
			data: {}
		}
	}

	componentDidMount(){
		let user = this.props.user;
		let dog = this.props.dog;
		let url = serverLink + 'dogs/'+ dog;
		let config = {
			headers:{
				'Accept': '*/*',
				'Content-Type': 'application/json',
				'Authorization': "token"
			}
		}
		axios.get(url,config).then(
				res => {
					console.log("[eticion exitosa");
					console.log(res);
					let resData = res.data;
					this.setState({data: resData})
				}
			).catch(
				error => {
					console.log("error en la peticion");
					console.log(error);
				}
			)
	}

	render(){
		return(<div>
			{this.state.data}
			<h3><Link style={{ textDecoration: 'none'}} to="/changeDogInfo" >Cambiar la informacion</Link> </h3>
		</div>)
	}
}