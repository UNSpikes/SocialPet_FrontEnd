import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../../components/blog/blog.css';
import { NavBar } from './../navBar/navbar';

export class Blog extends React.Component {
  render() {
    return (
      <div class="blog-box">
        <div class="container-fluid main-container">
          <div class="jumbotron">
            <div id ="blogTitle" class="text-rigth">Blog Title</div>

            <hr></hr>

            <div class="blog-grid">
              <blogDate class="blog-date">
                Date
              </blogDate>
              <div class="blog-tags blog-grid">
                <blogTags>Tag 01</blogTags>
                <blogTags>Tag 02</blogTags>
                <blogTags>Tag 03</blogTags>
                <blogTags>Tag 04</blogTags>
                <blogTags>Tag 05</blogTags>
                <blogTags>Tag 06</blogTags>
                <blogTags>Tag 07</blogTags>
              </div>
            </div>

            <p>
              Remember, remember, the Fifth of November, the Gunpowder Treason and Plot. 
              I know of no reason why the Gunpowder Treason should ever be forgot... 
              But what of the man? I know his name was Guy Fawkes and I know, in 1605, 
              he attempted to blow up the Houses of Parliament. But who was he really? 
              What was he like? We are told to remember the idea, not the man, because 
              a man can fail. He can be caught, he can be killed and forgotten, but 
              400 years later, an idea can still change the world. I've witnessed first 
              hand the power of ideas, I've seen people kill in the name of them, and die 
              defending them... but you cannot kiss an idea, cannot touch it, or hold it... 
              ideas do not bleed, they do not feel pain, they do not love... And it is not 
              an idea that I miss, it is a man... A man that made me remember the Fifth of 
              November. A man that I will never forget.
            </p>

            <div class="blog-comment">
              <div class="media border p-3">
                <img src="https://i1.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1" class="comment-img align-self-start mr-3 rounded-circle"></img>
                <div class="media-body">
                  <h4>User name 01 <small><i>Posted on "Date"</i></small></h4>
                  <p>This comment is and example</p>
                </div>
              </div>
              <div class="media border p-3">
                <img src="https://i1.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1" class="comment-img align-self-start mr-3 rounded-circle"></img>
                <div class="media-body">
                  <h4>User name 02 <small><i>Posted on "Date"</i></small></h4>
                  <p>This comment is and example</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  };
}