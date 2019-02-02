import React from 'react';
import { NavBar } from './../navBar/navbar';
import { LogIn } from './login/login';
import { Registrer } from './registrer/registrer';
import { Home } from './landing/home';
import { User } from './user/user';
import { Admin } from './../admin/admin';
import { Blog } from './blogs/info/blog';
import { Blogs } from './blogs/blogs';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

export class App extends React.Component {
  constructor() {
    super();
    localStorage.setItem("IsLogged", false);
    localStorage.setItem("AuxID", "");
    localStorage.setItem("jwt", "");
    localStorage.setItem("UsrID", "");
    localStorage.setItem("UsrName", "");
    localStorage.setItem("UsrLastName", "");
    localStorage.setItem("UsrProfile", false);
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <Route path='/admin' component={Admin} />
          <Route path='/home' component={Home} />
          <Route path='/login' component={LogIn} />
          <Route path='/registrer' component={Registrer} />
          <Route path='/user' component={User} />
          <Route path='/blogs' component={Blogs} />
          <Route path='/blog/info' component={Blog} />
          <Redirect from="/*" to="/home" />
        </div>
      </BrowserRouter>
    )
  }
}
