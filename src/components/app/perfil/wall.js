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



export class Wall extends React.Component{


    render(){
    return (
      <div>
        <title>Wall Template</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <link rel="stylesheet" href="lib\bootstrap\css\bootstrap.min.css" type="text/css" />
        <link rel="stylesheet" href="lib\font-awesome\css\font-awesome.min.css" />
        <link rel="stylesheet" href="lib\bootstrap-switch\css\bootstrap-switch.min.css" />
        <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,600,700" rel="stylesheet" />
        <link rel="stylesheet" href="style.css" type="text/css" />
        {/*Header with Nav */}
        <header className="text-right">
          <form className="text-left search" method="GET">
            <input name="q" type="text" placeholder="Search.." />
          </form>
          <div className="menu-icon">
            <div className="dropdown">
              <span className="dropdown-toggle" role="button" id="dropdownSettings" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                <span className="hidden-xs hidden-sm">Settings</span> <i className="fa fa-cogs" aria-hidden="true" />
              </span>
              <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownSettings">
                <li>
                  <a href="settings" title="Settings" data-toggle="modal" data-target="#settingsmodal">
                    <div className="col-xs-4">
                      <i className="fa fa-wrench" aria-hidden="true" />
                    </div>
                    <div className="col-xs-8 text-left">
                      <span>Settings</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" title="Settings">
                    <div className="col-xs-4">
                      <i className="fa fa-question" aria-hidden="true" />
                    </div>
                    <div className="col-xs-8 text-left">
                      <span>FAQ</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" title="Settings">
                    <div className="col-xs-4">
                      <i className="fa fa-sign-out" aria-hidden="true" />
                    </div>
                    <div className="col-xs-8 text-left">
                      <span>Logout</span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="second-icon dropdown menu-icon">
            <span className="dropdown-toggle" role="button" id="dropdownNotification" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
              <span className="hidden-xs hidden-sm">Notifications</span> <i className="fa fa-bell-o" aria-hidden="true" /> <span className="badge">2</span>
            </span>
            <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownNotification">
              <li className="new-not">
                <a href="#" title="User name comment"><img src={user2} alt="User name" className="img-circle img-user-mini" /> User comments your post</a>
              </li>
              <li className="new-not">
                <a href="#" title="User name comment"><img src={user3} alt="User name" className="img-circle img-user-mini" /> User comments your post</a>
              </li>
              <li>
                <a href="#" title="User name comment"><img src={user4} alt="User name" className="img-circle img-user-mini" /> User comments your post</a>
              </li>
              <li role="separator" className="divider" />
              <li><a href="#" title="All notifications">All Notifications</a></li>
            </ul>
          </div>
          <div className="second-icon menu-icon">
            <span><a href="personal" title="Profile"><span className="hidden-xs hidden-sm">Profile</span> <i className="fa fa-user" aria-hidden="true" /></a>
            </span>
          </div>
          <div className="second-icon menu-icon">
            <span><a href="wall" title="Wall"><span className="hidden-xs hidden-sm">Wall</span> <i className="fa fa-database" aria-hidden="true" /></a>
            </span>
          </div>
        </header>
        {/*Left Sidebar with info Profile */}
        <div className="sidebar-nav">
          <a href="personal" title="Profile">
            <img src={user} alt="User name" className="img-circle img-user" />
          </a>
          <h2 className="text-center hidden-xs"><a href="personal" title="Profile">My User</a></h2>
          <p className="text-center user-description hidden-xs">
            <i>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</i>
          </p>
        </div>
        {/*Wall with Post */}
        <div className="content-posts active" id="posts">
          <div className="primary-content">
            <div id="posts-container" className="container-fluid container-posts">
              <div className="card-post">
                <div className="row">
                  <div className="col-xs-3 col-sm-2">
                    <a href="personal" title="Profile">
                      <img src={user} alt="User name" className="img-circle img-user" />
                    </a>
                  </div>
                  <div className="col-xs-9 col-sm-10 info-user">
                    <h3><a href="personal" title="Profile">My User</a></h3>
                    <p><i>2h</i></p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-8 col-sm-offset-2 data-post">
                    <p>Lorem Ipsum Dolor si amet</p>
                    <div className="reaction">
                      ❤ 156 😃 54
                    </div>
                    <div className="comments">
                      <div className="more-comments">View more comments</div>
                      <ul>
                        <li><b>User1</b> Lorem Ipsum Dolor si amet</li>
                        <li><b>User2</b> Lorem Ipsum Dolor si amet 😂</li>
                      </ul>
                      <form>
                        <input type="text" className="form-control" placeholder="Add a comment" />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-post">
                <div className="row">
                  <div className="col-xs-3 col-sm-2">
                    <a href="user-profile.html" title="User Profile">
                      <img src={user2} alt="User name" className="img-circle img-user" />
                    </a>
                  </div>
                  <div className="col-xs-9 col-sm-10 info-user">
                    <h3><a href="user-profile.html" title="User Profile">User Name</a></h3>
                    <p><i>2h</i></p>
                  </div>
                </div>
                <div className="row">
                  <div className=" col-sm-8 col-sm-offset-2 data-post">
                    <p>Lorem Ipsum Dolor si amet</p>
                    <img src={post} alt="image post" className="img-post" />
                    <div className="reaction">
                      ❤ 1234 😃 54
                    </div>
                    <div className="comments">
                      <div className="more-comments">View more comments</div>
                      <ul>
                        <li><b>User1</b> Lorem Ipsum Dolor si amet</li>
                        <li><b>User2</b> Lorem Ipsum Dolor si amet 😂</li>
                      </ul>
                      <form>
                        <input type="text" className="form-control" placeholder="Add a comment" />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-post">
                <div className="row">
                  <div className="col-xs-3 col-sm-2">
                    <a href="personal" title="User Profile">
                      <img src={user} alt="User name" className="img-circle img-user" />
                    </a>
                  </div>
                  <div className="col-xs-9 col-sm-10 info-user">
                    <h3><a href="personal" title="User Profile">My User</a></h3>
                    <p><i>2h</i></p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-8 col-sm-offset-2 data-post">
                    <p>Lorem Ipsum Dolor si amet</p>
                    <video controls>
                      <source src="img\post-video.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    <div className="reaction">
                      ❤ 1234 😃 54
                    </div>
                    <div className="comments">
                      <div className="more-comments">View more comments</div>
                      <ul>
                        <li><b>User1</b> Lorem Ipsum Dolor si amet</li>
                        <li><b>User2</b> Lorem Ipsum Dolor si amet 😂</li>
                      </ul>
                      <form>
                        <input type="text" className="form-control" placeholder="Add a comment" />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*Close #posts-container*/}
          <div className="sidebar-right hidden-xs hidden-sm">
            <div className="card-post">
              <div className="row">
                <div className="col-sm-12">
                  <p><i>Suggested post</i></p>
                  <h3><a href="#" title="Company">Company</a></h3>
                  <img src={company} alt="Suggested post" />
                </div>
              </div>
            </div>
            <div className="card-post">
              <div className="row">
                <div className="col-sm-12">
                  <h3>Popular Users</h3>
                </div>
                <div className="col-xs-3 popular-img">
                  <a href="#">
                    <img src={user} alt="User name" className="img-circle" />
                  </a>
                </div>
                <div className="col-xs-3 popular-img">
                  <a href="#">
                    <img src={user2} alt="User name" className="img-circle" />
                  </a>
                </div>
                <div className="col-xs-3 popular-img">
                  <a href="#">
                    <img src={user3} alt="User name" className="img-circle" />
                  </a>
                </div>
                <div className="col-xs-3 popular-img">
                  <a href="#">
                    <img src={user4} alt="User name" className="img-circle" />
                  </a>
                </div>
                <div className="col-xs-3 popular-img">
                  <a href="#">
                    <img src={user5} alt="User name" className="img-circle" />
                  </a>
                </div>
                <div className="col-xs-3 popular-img">
                  <a href="#">
                    <img src={user6} alt="User name" className="img-circle" />
                  </a>
                </div>
                <div className="col-xs-3 popular-img">
                  <a href="#">
                    <img src={user7} alt="User name" className="img-circle" />
                  </a>
                </div>
                <div className="col-xs-3 popular-img">
                  <a href="#">
                    <img src={user8} alt="User name" className="img-circle" />
                  </a>
                </div>
              </div>
            </div>
            <div className="card-post">
              <div className="row">
                <div className="col-sm-12">
                  <h3>Popular Photos</h3>
                </div>
                <div className="col-xs-4 popular-img">
                  <a href="#">
                    <img src={photo} alt="User name" />
                  </a>
                </div>
                <div className="col-xs-4 popular-img">
                  <a href="#">
                    <img src={photo2} alt="User name" />
                  </a>
                </div>
                <div className="col-xs-4 popular-img">
                  <a href="#">
                    <img src={photo3} alt="User name" />
                  </a>
                </div>
                <div className="col-xs-4 popular-img">
                  <a href="#">
                    <img src={photo4} alt="User name" />
                  </a>
                </div>
                <div className="col-xs-4 popular-img">
                  <a href="#">
                    <img src={photo5} alt="User name" />
                  </a>
                </div>
                <div className="col-xs-4 popular-img">
                  <a href="#">
                    <img src={photo6} alt="User name" />
                  </a>
                </div>
                <div className="col-xs-4 popular-img">
                  <a href="#">
                    <img src={photo7} alt="User name" />
                  </a>
                </div>
                <div className="col-xs-4 popular-img">
                  <a href="#">
                    <img src={photo8} alt="User name" />
                  </a>
                </div>
                <div className="col-xs-4 popular-img">
                  <a href="#">
                    <img src={photo9} alt="User name" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="loading">
          <img src="img\load.gif" alt="loader" />
        </div>
        {/* Close #posts */}
        {/* Modal container for settings-*/}
        <div id="settingsmodal" className="modal fade text-center">
          <div className="modal-dialog">
            <div className="modal-content">
            </div>
          </div>
        </div>
      </div>
    );
  }
}