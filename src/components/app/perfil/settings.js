import React from 'react';
import './style.css';
import './lib/bootstrap/css/bootstrap.min.css';
import './lib/bootstrap-switch/css/bootstrap-switch.min.css';
import {socialyte} from './js/socialyte.min';
import {lazy} from './js/lazy-load.min';
import user from './img/user.jpeg';
import user2 from './img/user2.jpeg';
import user3 from './img/user3.jpeg';
import user4 from './img/user4.jpeg';
import user5 from './img/user5.jpeg';
import user6 from './img/user6.jpeg';
import user7 from './img/user7.jpeg';
import user8 from './img/user8.jpeg';

import photo from './img/photo1.jpeg';
import photo2 from './img/photo2.jpeg';
import photo3 from './img/photo3.jpeg';
import photo4 from './img/photo4.jpeg';
import photo5 from './img/photo5.jpeg';
import photo6 from './img/photo6.jpeg';
import photo7 from './img/photo7.jpeg';
import photo8 from './img/photo8.jpeg';
import photo9 from './img/photo9.jpeg';



import company from './img/company.jpeg';

import post from './img/post.jpeg';
import load from './img/load.gif';
import { GET, POST } from './../../../JS/constants/api';
import './lib/font-awesome/css/font-awesome.min.css';
import './lib/bootstrap/fonts/glyphicons-halflings-regular-1.eot';
import './lib/bootstrap/fonts/glyphicons-halflings-regular.eot';
import './lib/bootstrap/fonts/glyphicons-halflings-regular.svg';
import './lib/bootstrap/fonts/glyphicons-halflings-regular.ttf';



import { BrowserRouter as Router, Route, Link } from "react-router-dom";
let user_id = '1';



export class Settings extends React.Component{
    render(){
    return (
      <div>
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
          <h4 className="modal-title">General Settings</h4>
        </div>
        <div className="modal-body">
          <div className="row modal-row">
            <div className="col-sm-3">
              <label>User name: </label>
            </div>
            <div className="col-sm-6">
              User name
            </div>
            <div className="col-sm-3">
              <a href="#" title="Edit Username"><i className="fa fa-pencil" aria-hidden="true" /> <i>Edit</i></a>
            </div>
          </div>
          <div className="row modal-row">
            <div className="col-sm-3">
              <p>
                <label>Email: </label>
              </p>
            </div>
            <div className="col-sm-6">
              <p>
                example@email.com
              </p>
            </div>
            <div className="col-sm-3">
              <p>
                <a href="#" title="Edit Email"><i className="fa fa-pencil" aria-hidden="true" /> <i>Edit</i></a>
              </p>
            </div>
          </div>
          <div className="row modal-row">
            <div className="col-sm-3">
              <p>
                <label>Change password: </label>
              </p>
            </div>
            <div className="col-sm-6">
              <p>*********</p>
            </div>
            <div className="col-sm-3">
              <a href="#" title="Edit Password"><i className="fa fa-pencil" aria-hidden="true" /> <i>Edit</i></a>
            </div>
          </div>
          <div className="row modal-row">
            <div className="col-sm-3">
              <p>
                <label>Language: </label>
              </p>
            </div>
            <div className="col-sm-6">
              <p>English (UK)</p>
            </div>
            <div className="col-sm-3">
              <a href="#" title="Edit Language"><i className="fa fa-pencil" aria-hidden="true" /> <i>Edit</i></a>
            </div>
          </div>
          <div className="row modal-row">
            <div className="col-sm-3">
              <p>
                <label>Public profile: </label>
              </p>
            </div>
            <div className="col-sm-6">
              <p>
                <input className="switch-checkbox" type="checkbox" name="PublicProfile" data-on-text="Yes" data-off-text="No" defaultChecked />
              </p>
            </div>
            <div className="col-sm-3">
            </div>
          </div>
          <div className="row modal-row">
            <div className="col-sm-3">
              <p>
                <label>Notifications Email: </label>
              </p>
            </div>
            <div className="col-sm-6">
              <input className="switch-checkbox" type="checkbox" name="NotificationsEmail" data-on-text="Yes" data-off-text="No" defaultChecked />
            </div>
            <div className="col-sm-3">
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
          <button type="button" className="btn btn-social">Save changes</button>
        </div>
      </div>
    );
  }
}