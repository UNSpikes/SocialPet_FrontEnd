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



export class UserProfile extends React.Component{
    render(){
    return (
      <div>
        <title>User Profile Template</title>
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
                  <a href="settings.html" title="Settings" data-toggle="modal" data-target="#settingsmodal">
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
                <a href="#" title="User name comment"><img src="img\user2.jpeg" alt="User name" className="img-circle img-user-mini" /> User comments your post</a>
              </li>
              <li className="new-not">
                <a href="#" title="User name comment"><img src="img\user3.jpeg" alt="User name" className="img-circle img-user-mini" /> User comments your post</a>
              </li>
              <li>
                <a href="#" title="User name comment"><img src="img\user4.jpeg" alt="User name" className="img-circle img-user-mini" /> User comments your post</a>
              </li>
              <li role="separator" className="divider" />
              <li><a href="#" title="All notifications">All Notifications</a></li>
            </ul>
          </div>
          <div className="second-icon menu-icon">
            <span><a href="personal-profile.html" title="Profile"><span className="hidden-xs hidden-sm">Profile</span> <i className="fa fa-user" aria-hidden="true" /></a>
            </span>
          </div>
          <div className="second-icon menu-icon">
            <span><a href="wall.html" title="Wall"><span className="hidden-xs hidden-sm">Wall</span> <i className="fa fa-database" aria-hidden="true" /></a>
            </span>
          </div>
        </header>
        {/*Left Sidebar with info Profile */}
        <div className="sidebar-nav">
          <a href="user-profile.html" title="User profile">
            <img src="img\user2.jpeg" alt="User name" className="img-circle img-user" />
          </a>
          <h2 className="text-center hidden-xs"><a href="user-profile.html" title="User profile">User Name</a></h2>
          <p className="text-center user-description hidden-xs">
            <i>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</i>
          </p>
        </div>
        <div className="content-posts profile-content">
          <div className="banner-profile">
          </div>
          {/* Tab Panel */}
          <ul className="nav nav-tabs" role="tablist">
            <li className="active"><a href="#posts" role="tab" id="postsTab" data-toggle="tab" aria-controls="posts" aria-expanded="true">Last posts</a></li>
            <li><a href="#profile" role="tab" id="profileTab" data-toggle="tab" aria-controls="profile" aria-expanded="true">Profile</a></li>
            <li><a href="#chat" role="tab" id="chatTab" data-toggle="tab" aria-controls="chat" aria-expanded="true">Chat</a></li>
          </ul>
          {/*Start Tab Content*/}
          <div className="tab-content">
            {/* Tab Posts */}
            <div className="tab-pane fade active in" role="tabpanel" id="posts" aria-labelledby="postsTab">
              <div id="posts-container" className="container-fluid container-posts">
                <div className="card-post">
                  <div className="row">
                    <div className="col-xs-3 col-sm-2">
                      <a href="user-profile.html" title="User profile">
                        <img src="img\user2.jpeg" alt="User name" className="img-circle img-user" />
                      </a>
                    </div>
                    <div className="col-xs-9 col-sm-10 info-user">
                      <h3><a href="user-profile.html" title="User profile">User Name</a></h3>
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
                      <a href="user-profile.html" title="User profile">
                        <img src="img\user2.jpeg" alt="User name" className="img-circle img-user" />
                      </a>
                    </div>
                    <div className="col-xs-9 col-sm-10 info-user">
                      <h3><a href="user-profile.html" title="User profile">User Name</a></h3>
                      <p><i>2h</i></p>
                    </div>
                  </div>
                  <div className="row">
                    <div className=" col-sm-8 col-sm-offset-2 data-post">
                      <p>Lorem Ipsum Dolor si amet</p>
                      <img src="img\post.jpeg" alt="image post" className="img-post" />
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
                      <a href="user-profile.html" title="User profile">
                        <img src="img\user2.jpeg" alt="User name" className="img-circle img-user" />
                      </a>
                    </div>
                    <div className="col-xs-9 col-sm-10 info-user">
                      <h3><a href="user-profile.html" title="User profile">User Name</a></h3>
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
              <div id="loading">
                <img src="img\load.gif" alt="loader" />
              </div>
            </div>{/* end Tab Posts */}
            {/*Start Tab Profile*/}
            <div className="tab-pane fade" role="tabpanel" id="profile" aria-labelledby="profileTab">
              <div className="container-fluid container-posts">
                <div className="card-post">
                  <ul className="profile-data">
                    <li><b>Username:</b> User</li>
                    <li><b>Age:</b> 26</li>
                    <li><b>Hobbies:</b> trecking and cooking</li>
                    <li><b>Studies:</b> University of World</li>
                    <li><b>Job:</b> Full stack Developer</li>
                    <li><b>Description:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                  </ul>
                </div>
              </div>
            </div>{/* end tab Profile */}
            {/* Start Tab chat*/}
            <div className="tab-pane fade" role="tabpanel" id="chat" aria-labelledby="chatTab">
              <div className="container-fluid container-posts">
                <div className="card-post">
                  <div className="scrollbar-container">
                    <div className="row chat-row">
                      <div className="col-sm-2 col-xs-3">
                        <a href="user-profile.html" title="User profile">
                          <img src="img\user2.jpeg" alt="User name" className="img-circle img-user" />
                        </a>
                      </div>
                      <div className="col-sm-7 col-xs-8 chat-message">
                        <h4>User Name</h4>
                        <p className="chat-time">An hour ago</p>
                        Lorem Ipsum Dolor si amet, Lorem Ipsum Dolor si amet, Lorem Ipsum Dolor
                      </div>
                    </div>
                    <div className="row chat-row">
                      <div className="col-sm-2 col-xs-3 pull-right">
                        <a href="personal-profile.html" title="User profile">
                          <img src="img\user.jpeg" alt="My User" className="img-circle img-user" />
                        </a>
                      </div>
                      <div className="col-sm-7 col-xs-8 chat-message pull-right">
                        <h4>My user</h4>
                        <p className="chat-time text-right">An hour ago</p>
                        Lorem Ipsum Dolor si amet, Lorem Ipsum Dolor si amet, Lorem Ipsum Dolor
                      </div>
                    </div>
                    <div className="row chat-row">
                      <div className="col-sm-2 col-xs-3">
                        <a href="user-profile.html" title="User profile">
                          <img src="img\user2.jpeg" alt="User name" className="img-circle img-user" />
                        </a>
                      </div>
                      <div className="col-sm-7 col-xs-8 chat-message">
                        <h4>User Name</h4>
                        <p className="chat-time">An hour ago</p>
                        Lorem Ipsum Dolor si amet, Lorem Ipsum Dolor si amet, Lorem Ipsum Dolor 🙈 🙈
                      </div>
                    </div>
                    <div className="row chat-row">
                      <div className="col-sm-2 col-xs-3 pull-right">
                        <a href="personal-profile.html" title="User profile">
                          <img src="img\user.jpeg" alt="My user" className="img-circle img-user" />
                        </a>
                      </div>
                      <div className="col-sm-7 col-xs-8 chat-message pull-right">
                        <h4>My user</h4>
                        <p className="chat-time text-right">A minut ago</p>
                        Lorem Ipsum Dolor si amet, Lorem Ipsum Dolor si amet, Lorem Ipsum Dolor 🙈 🙈
                      </div>
                    </div>
                  </div>
                  <div className="row chat-row">
                    <div className="col-sm-12">
                      <form className="form-message">
                        <input type="text" className="form-control" placeholder="Send a message" />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>{/* End Tab chat*/}
          </div>{/* Close Tab Content*/}
        </div>{/*Close content posts*/}
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