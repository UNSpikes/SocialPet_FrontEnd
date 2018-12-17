import React from 'react';
import {styles} from './perfilStyle';
import './stylePer.css';
import { GET, POST } from '../../JS/constants/api';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

let user_id = '1';

export class Perfil extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {
      user: [],
      loading: true
    };
  }
  
  componentDidMount(){
  GET('users/'+user_id+'/info').then((res) => {
      console.log(res)
      this.setState({  
        user: res.data.user,
        loading: false,
      });
    }).catch((err) => console.log(err));
  };
	
	
	
	render(){
	  
	  const {user} = this.state;
	  
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
            <header className="site-header"></header>
            <div className="cover-photo"></div>
            
            <section className="left-col user-info">
            <div className="profile-avatar">
              <div className="inner"></div>
            </div>
            <h1>{user.name +" "+ user.last_name}</h1>
            <h2>{user.country}</h2>
            <div className="meta">
              <p><i className="fa fa-fw fa-map-marker" ></i>{user.city}</p>
              <p><i className="fa fa-fw fa-link"></i>{user.email}</p>
              <p><i className="fa fa-fw fa-clock-o"></i> Edad: {user.age}</p>
            </div>
            </section>
            
              <section className="section center-col content">
                <nav className="profile-nav">
                  <ul>
                    <li className="active">Actividad</li>
                    <li>Seguir</li>
                    <li>Fotos</li>
                    <li></li>
                  </ul>
                </nav>
                <div className="unit user-hyped">
                  <h3><Link style={{ textDecoration: 'none'}} to="/doginfo" >Sasha</Link> tiene  <a href="#more-looks-url">13 visitas</a></h3>
                  <p className="time">12 horas apróximadamente</p>
                  <ul className="image-grid col-3">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                  <a href="#more-looks-url" className="more"> 7 likes <i className="fa fa-angle-down"></i></a>
                </div>
                <div className="unit user-hyped">
                  <h3><Link style={{ textDecoration: 'none'}} to="/doginfo" >Mateo</Link> tiene <a href="#user-profile-url">10 visitas</a></h3>
                  <p className="time">1 hora apróximadamente</p>
                  <ul className="image-grid col-3">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                  <a href="#more-looks-url" className="more">100 likes.<i className="fa fa-angle-down"></i></a>
                </div>
              </section>
              
              <section className="right-col">
              <h4>{" "+" "}Acerca de {user.name}</h4>
              <h6>Información acerca del usuario</h6>
              
              </section>
            
            </div>
            </div>
            
  
		);
	};
}


