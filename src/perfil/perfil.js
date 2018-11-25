import React from 'react';
import {styles} from './perfilStyle';
import '../styles/stylePer.css';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';



import { BrowserRouter as Router, Route, Link } from "react-router-dom";


export class Perfil extends React.Component{
	
	
	
	render(){
		return (
            <div className = "titulo">
            <SideNav onSelect={(selected) => {// Add your code here
			}}><SideNav.Toggle />
                <SideNav.Nav defaultSelected="home">
                    <NavItem eventKey="home">
                        <NavIcon>
                            <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Inicio
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="Acciones">
                        <NavIcon>
                            <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                    <NavText>
                            Perfil
                    </NavText>
                    <NavItem eventKey="charts/linechart">
                        <NavText>
                            Editar Perfil
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="charts/barchart">
                        <NavText>
                            Eliminar Perfil
                        </NavText>
                    </NavItem>
                    </NavItem>
                    </SideNav.Nav>
                </SideNav>
                			
        
            <div className = "body"> 
            <header class="site-header"></header>
            <div class="cover-photo"></div>
            
            <section class="left-col user-info">
            <div class="profile-avatar">
              <div class="inner"></div>
            </div>
            <h1>Sacha Michan</h1>
            <h2>Colombia</h2>
            <div class="meta">
              <p><i class="fa fa-fw fa-map-marker"></i> Bogotá</p>
              <p><i class="fa fa-fw fa-link"></i> sacha@gmail.com</p>
              <p><i class="fa fa-fw fa-clock-o"></i> Edad: Dec 26, 2008</p>
            </div>
            </section>
            
              <section class="section center-col content">
                <nav class="profile-nav">
                  <ul>
                    <li class="active">Actividad</li>
                    <li>Amigos</li>
                    <li>Fotos</li>
                    <li>Contactos</li>
                  </ul>
                </nav>
                <div class="unit user-hyped">
                  <h3><a href="http://lookbook.nu/user/17530-Willabelle-O">Sacha</a> tiene  <a href="#more-looks-url">13 visitas</a></h3>
                  <p class="time">12 horas apróximadamente</p>
                  <ul class="image-grid col-3">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                  <a href="#more-looks-url" class="more">View 7 more looks <i class="fa fa-angle-down"></i></a>
                </div>
                <div class="unit user-hyped">
                  <h3><a href="http://lookbook.nu/user/17530-Willabelle-O">Willabelle</a> fanned <a href="#user-profile-url">Mizuho K</a></h3>
                  <p class="time">16 hours ago</p>
                  <ul class="image-grid col-3">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                  <a href="#more-looks-url" class="more">Visto 7 veces.<i class="fa fa-angle-down"></i></a>
                </div>
              </section>
              
              <section class="right-col"></section>
            
            </div>
            </div>
            
  
		);
	};
}


