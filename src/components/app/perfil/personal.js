
import React from 'react';
import './style.css';
import './lib/bootstrap/css/bootstrap.min.css';
import './lib/bootstrap/css/bootstrap.css';
import './lib/bootstrap/css/dist/bootstrap.css';
import './lib/bootstrap/css/less/scaffolding.less';
import './lib/bootstrap/css/less/normalize.less';
import './lib/bootstrap/css/less/mixins/border-radius.less';
import './lib/bootstrap/css/less/utilities.less';
import './lib/bootstrap/css/less/navs.less';

//import './lib/bootstrap-switch/css/bootstrap-switch.min.css';
import {socialyte} from './js/socialyte.min.js';
import {lazy} from './js/lazy-load.min.js';


import user1 from './img/user.jpeg';
import post from './img/post.jpeg';
import load from './img/load.gif';

import { GET, POST } from './../../../JS/constants/api';
import axios from 'axios';



import { BrowserRouter as Router, Route, Link } from "react-router-dom";
let user_id = '1';
let like = 0;
let i;

export class Personal extends React.Component{
        constructor(props) {
            super(props);
            this.state = {
              user: [],
              dogs:[],
              loading: true,
              isToggleOn: true
            };
            this.handleClick = this.handleClick.bind(this);
          }
          
          handleClick() {
            this.setState(state => ({
              isToggleOn: !state.isToggleOn
            }));
          }


          componentDidMount(){
            axios({
              method: "GET",
              url: "http://localhost:4200/users/"  + user_id + "/info/",
              headers: {
                Authorization: "Bearer " + localStorage.getItem("jwtToken")
              }
            }).then((res) => {
              this.setState({
                user: res.data.user,
                dogs: res.data.dogs,
                loading: false,
              });
            }) 
              .catch((err) => console.log(err));
          };

    render(){
        
        const {user} = this.state;
	    const {dogs} = this.state;
	    const dogsList = dogs.map(tag =>
                         ({name: tag.name, id:tag.id })
                  )
        console.log(dogsList)
        
    return (
     
      <div className = "Titulo">
        <script src="https://twemoji.maxcdn.com/twemoji.min.js"></script>
        {/*Header with Nav */}
        <header className="text-right">
          <form className="text-left search" method="GET">
            <input name="q" type="text" placeholder="Search.." />
          </form>
          <div className="menu-icon">
            <div className="second-icon menu-icon">
              <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="login" title="Loguot"><span className="hidden-xs hidden-sm">Logout</span> <i className="fa fa-sign-out" aria-hidden="true" /></a> 
              </span>
            </div>
            <div className="second-icon menu-icon">
                <span><a href="settings" title="Settings"><span className="hidden-xs hidden-sm">Settings</span> <i className="fa fa-cogs" aria-hidden="true"/></a>
                </span>   
            </div>
          </div>
          <div className="second-icon dropdown menu-icon">
            <span className="dropdown-toggle" role="button" id="dropdownNotification" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
              <span className="hidden-xs hidden-sm">Notifications</span> <i className="fa fa-bell-o" aria-hidden="true" /> <span className="badge">2</span>
            </span>
            <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownNotification">
              <li className="new-not">
                <a href="#" title="User name comment"><img src=".\img\user2.jpeg" alt="User name" className="img-circle img-user-mini" /> User comments your post</a>
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
          <a href="personal-profile.js" title="Profile">
            <img src={user1} alt="User name" className="img-circle img-user" />
          </a>
          <h2 className="text-center hidden-xs"><a href="personal-profile.html" title="Profile">{user.name +" "+ user.last_name}</a></h2>
          <button onClick={this.handleClick}>
                          {this.state.isToggleOn ? 'LIKE' : 'UNLIKE'}
                        </button>
          <p className="text-center user-description hidden-xs">
            <i>prueba</i>
          </p>
        </div>
        <div className="content-posts profile-content">
          <div className="banner-profile">
          </div>
          {/* Tab Panel */}
          <ul className="nav nav-tabs" role="tablist">
            <li className="active"><a href="#posts" role="tab" id="postsTab" data-toggle="tab" aria-controls="posts" aria-expanded="true">Last posts</a></li>
            <li className="active"><a href="#profile" role="tab" id="profileTab" data-toggle="tab" aria-controls="profile" aria-expanded="true">Profile</a></li>
            <li className="active"><a href="#chat" role="tab" id="chatTab" data-toggle="tab" aria-controls="chat" aria-expanded="true">Chat</a></li>
          </ul>
          {/*Start Tab Content*/}
          <div className="tab-content">
            {/* Tab Posts */}
            <div className="tab-pane fade active in" role="tabpanel" id="posts" aria-labelledby="postsTab">
              <div id="posts-container" className="container-fluid container-posts">
                <div className="card-post">
                  <div className="row">
                    <div className="col-xs-3 col-sm-2">
                      <a href="personal" title="Profile">
                        <img src={user1} alt="User name" className="img-circle img-user" />
                      </a>
                    </div>
                    <div className="col-xs-9 col-sm-10 info-user">
                      <h3><a href="personal" title="Profile">{user.name +" "+ user.last_name}</a></h3>
                      <p><i>2h</i></p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-8 col-sm-offset-2 data-post">
                      <p>Lorem Ipsum Dolor si amet</p>
                      <div className="reaction">
                      <div className="like">
                        <button onClick={this.handleClick}>
                          {this.state.isToggleOn ? 'LIKE' : 'UNLIKE'}
                        </button> 
                      </div>     
                        &#x2764; 150 &#x1F603; 54
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
                      <a href="personal" title="Profile">
                        <img src={user1} alt="My User" className="img-circle img-user" />
                      </a>
                    </div>
                    <div className="col-xs-9 col-sm-10 info-user">
                      <h3><a href="personal" title="Profile">{user.name +" "+ user.last_name}</a></h3>
                      <p><i>2h</i></p>
                    </div>
                  </div>
                  <div className="row">
                    <div className=" col-sm-8 col-sm-offset-2 data-post">
                      <p>Lorem Ipsum Dolor si amet</p>
                      <img src={post} alt="image post" className="img-post" />
                      <div className="reaction">
                      <button onClick={this.handleClick}>
                          {this.state.isToggleOn ? 'LIKE' : 'UNLIKE'}
                        </button>
                        &#x2764; 156 &#x1F603; 54
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
                      <a href="personal" title="Profile">
                        <img src={user1} alt="User name" className="img-circle img-user" />
                      </a>
                    </div>
                    <div className="col-xs-9 col-sm-10 info-user">
                      <h3><a href="personal" title="Profile">{user.name +" "+ user.last_name}</a></h3>
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
                      <button onClick={this.handleClick}>
                          {this.state.isToggleOn ? 'LIKE' : 'UNLIKE'}
                        </button>
                      &#x2764; 156 &#x1F603; 54
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
                <img src={load} alt="loader" />
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
                  <p><a href title="edit profile"><i className="fa fa-pencil" aria-hidden="true" /> Edit profile</a></p>
                </div>
              </div>
            </div>{/* end tab Profile */}
            {/* Start Tab chat*/}
            <div className="tab-pane fade" role="tabpanel" id="chat" aria-labelledby="chatTab">
              <div className="container-fluid container-posts">
                <div className="card-post">
                  <div className="scrollbar-container">
                    <div className="row row-user-list">
                      <div className="col-sm-2 col-xs-3">
                        <img src="img\user2.jpeg" alt="User name" className="img-circle img-user" />
                      </div>
                      <div className="col-sm-7 col-xs-9">
                        <p><b>User Name</b> <span className="badge">1</span></p>
                        <p className="chat-time">An hour ago</p>
                        <p>Lorem ipsum</p>
                      </div>
                      <div className="col-sm-3 hidden-xs">
                        <p><a href title="Replay"><span className="badge badge-replay">Replay &gt;</span></a></p>
                      </div>
                    </div>
                    <div className="row row-user-list">
                      <div className="col-sm-2 col-xs-3">
                        <img src="img\user3.jpeg" alt="User name" className="img-circle img-user" />
                      </div>
                      <div className="col-sm-7 col-xs-9">
                        <p><b>User Name</b></p>
                        <p className="chat-time">Yesterday</p>
                        <p>Lorem ipsum</p>
                      </div>
                      <div className="col-sm-3 hidden-xs">
                        <p><a href title="Start chat"><span className="badge badge-message">Start chat &gt;</span></a></p>
                      </div>
                    </div>
                    <div className="row row-user-list">
                      <div className="col-sm-2 col-xs-3">
                        <img src="img\user4.jpeg" alt="User name" className="img-circle img-user" />
                      </div>
                      <div className="col-sm-7 col-xs-9">
                        <p><b>User Name</b></p>
                        <p className="chat-time">2 days ago</p>
                        <p>Lorem ipsum</p>
                      </div>
                      <div className="col-sm-3 hidden-xs">
                        <p><a href title="Start chat"><span className="badge badge-message">Start chat &gt;</span></a></p>
                      </div>
                    </div>
                    <div className="row row-user-list">
                      <div className="col-sm-2 col-xs-3">
                        <img src="img\user5.jpeg" alt="User name" className="img-circle img-user" />
                      </div>
                      <div className="col-sm-7 col-xs-9">
                        <p><b>User Name</b></p>
                        <p className="chat-time">2 days ago</p>
                        <p>Lorem ipsum</p>
                      </div>
                      <div className="col-sm-3 hidden-xs">
                        <p><a href title="Start chat"><span className="badge badge-message">Start chat &gt;</span></a></p>
                      </div>
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
