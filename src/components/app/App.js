import React from 'react';

import {LogIn} from './../login/login';
import {Registrer} from './../registrer/registrer';
import {Home} from './../landing/home';
import {User} from './../user/user';
import {Admin} from './../admin/admin';
import {Perfil} from './../perfil/perfil';
import {DogInfo} from './../dogInfo/dogInfo';
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
                    <Route  path='/perfil' component={Perfil}/>
                    <Route  path='/doginfo' component={DogInfo}/>
                    <Redirect from="/*" to="/home" />
                </div>
            </BrowserRouter>
	    )
	}
}