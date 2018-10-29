import React from 'react';

import {LogIn} from './../login/login';
import {Registrer} from './../registrer/registrer';
import {Home} from './../landing/home';
import {User} from './../user/user';
import {Admin} from './../admin/admin';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';



export class App extends React.Component{
	render(){
		return(	
			<BrowserRouter>
                <div>
                    <Route  path='/admin' component={Admin} />
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