import React from 'react';

import {LogIn} from './../login/login';
import {Registrer} from './../registrer/registrer';
import {Home} from './../landing/home';
import {User} from './../user/user';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';



export class App extends React.Component{
	render(){
		return(	
			<BrowserRouter>
                <div>
                    <Route  path='/home' component={Home} />
                    <Route  path='/login' component={LogIn}/>
                    <Route  path='/registrer' component={Registrer}/>
                    <Route  path='/user' component={User}/>
                    <Redirect from="/*" to="/home" />
                </div>
            </BrowserRouter>
	    )
	}
}