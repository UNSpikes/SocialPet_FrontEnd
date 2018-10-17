import React from 'react';
import {styles} from './perfilStyle';
import '../perfil/style.css'
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';



import { BrowserRouter as Router, Route, Link } from "react-router-dom";


export class Perfil extends React.Component{
	
	
	
	render(){
		let src = "https://www.anipedia.net/imagenes/taxonomia-perros.jpg";
		let facebook = 'https://icon-icons.com/icons2/555/PNG/512/facebook_icon-icons.com_53612.png';
		let google = 'https://elviejodragon.com/wp-content/uploads/2015/01/google__round_logo.png';
		let twitter = 'https://tarotdecarmenylidia.files.wordpress.com/2016/08/twitter-icon-770x769.png';
		return (
		
			<div className="loginBox">
			
			<SideNav
    onSelect={(selected) => {
        // Add your code here
    }}
>
    <SideNav.Toggle />
    <SideNav.Nav defaultSelected="home">
        <NavItem eventKey="home">
            <NavIcon>
                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                Home
            </NavText>
        </NavItem>
        <NavItem eventKey="charts">
            <NavIcon>
                <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                Charts
            </NavText>
            <NavItem eventKey="charts/linechart">
                <NavText>
                    Line Chart
                </NavText>
            </NavItem>
            <NavItem eventKey="charts/barchart">
                <NavText>
                    Bar Chart
                </NavText>
            </NavItem>
        </NavItem>
    </SideNav.Nav>
</SideNav>
			
			
			
			    <div className="perrosizquierda">
					<a href={src}><img src={src} className="imagen"/></a>
				 <button className="button" id="editar">Editar</button>
				 <textarea class="form-control" rows="3"></textarea>

				</div>
		
				<div className="editar">
				<h1 id = "style"> Social Pets</h1>
                <button className="button" id="perros">Perros</button><br></br>
				<button className="button"id="perros">Publicaciones</button><br></br>
				<button className="button"id="perros">Posts/Blogs</button>
				</div>
				
				
		
			</div>
		);
	};
}

