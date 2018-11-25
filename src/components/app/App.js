import React from 'react';
import { NavBar } from './../navBar/navbar';
import { LogIn } from './login/login';
import { Registrer } from './registrer/registrer';
import { Home } from './landing/home';
import { User } from './user/user';
import { Admin } from './../admin/admin';
import { Blog } from './blogs/info/blog';
import { Blogs } from './blogs/blogs';
import { Perfil } from './perfil/perfil';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

export class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar logOut="false" />
          <Route path='/admin' component={Admin} />
          <Route path='/home' component={Home} />
          <Route path='/login' component={LogIn} />
          <Route path='/registrer' component={Registrer} />
          <Route path='/user' component={User} />
          <Route path='/blogs' component={Blogs} />
          <Route path='/blog/info' component={Blog} />
          <Route  path='/perfil' component={Perfil}/>
          <Redirect from="/*" to="/home" />
        </div>
      </BrowserRouter>
    )
  }
}