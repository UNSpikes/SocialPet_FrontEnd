import React from 'react';
import axios from 'axios';

import FileViewer from 'react-file-viewer';

import {Loading} from './../loading/loading';

import { Document } from 'react-pdf';
import PDF from 'react-pdf-js';

export class ViewDocument extends React.Component{



	render(){
		let type = 'pdf';
		let file = 'https://socialped-back-unal.herokuapp.com/uploads/certificado/ruta/9/04.__ICIS_2018ii__-_Advanced_Encryption_Standard__AES_.pdf';
		return (
			<PDF file={file} />
		);
	}
}