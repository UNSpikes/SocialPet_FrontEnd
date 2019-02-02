import React from 'react';
import { NavBar } from './../navBar/navbar';
import { LogIn } from './login/login';
import { Registrer } from './registrer/registrer';
import { Home } from './landing/home';
import { User } from './user/user';
import { Perfil } from './perfil/perfil';
import { Personal } from './perfil/personal-profile';
import { Wall } from './perfil/wall';
import { Settings } from './perfil/settings';
import { UserProfile } from './perfil/user-profile';
import { Admin } from './../admin/admin';
import { Blog } from './blogs/info/blog';
import { Blogs } from './blogs/blogs';
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
          <Route path='/perfil' component={Perfil} />
          <Route path='/personal' component={Personal} />
          <Route path='/settings' component={Settings} />
          <Route path='/user-profile' component={UserProfile} />
          <Route path='/wall' component={Wall} />
          <Route path='/blogs' component={Blogs} />
          <Route path='/blog/info' component={Blog} />
          <Redirect from="/*" to="/home" />
        </div>
      </BrowserRouter>
    )
  }
}