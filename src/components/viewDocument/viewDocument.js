import React from 'react';
import axios from 'axios';

import FileViewer from 'react-file-viewer';

import {Loading} from './../loading/loading';

import { Document } from 'react-pdf';
import PDF from 'react-pdf-js';

export class ViewDocument extends React.Component{
	
	constructor(props){
		super(props)
		this.state = {
			pages: null,
			load: false
		}
		this.onDocumentComplete = this.onDocumentComplete.bind(this);
		this.handlePrevious = this.handlePrevious.bind(this);
		this.handleNext = this.handleNext.bind(this);
	}

	onDocumentComplete = (pages) => {
    	this.setState({ page: 1, pages });
    	//this.setState({load: false})
  	}
 
  	handlePrevious = () => {
    	this.setState({ page: this.state.page - 1 });
  	}
 
  	handleNext = () => {
    	this.setState({ page: this.state.page + 1 });
  	}
 
  	


	render(){
		let pagination = null;
    	
    	
		let type = 'pdf';
		//let file = 'https://socialped-back-unal.herokuapp.com//uploads/certificado/ruta/11/04.__ICIS_2018ii__-_Advanced_Encryption_Standard__AES_.pdf';
		let file = 'http://www.biblioteca.org.ar/libros/211795.pdf';
		return (
			<div>
				<PDF file={file}
					page={this.state.page}
					onDocumentComplete={this.onDocumentComplete}
				 />
				{pagination}
			</div>
		);
	}
}