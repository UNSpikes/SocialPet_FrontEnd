import React from 'react';
import './blog.css';
import { GET } from './../../../../JS/constants/api';
import { Loading } from "./../../loading/loading";

export class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blog: [],
      tags: [],
      loading: true
    };
  }

  componentDidMount(){
    let id = localStorage.getItem("AuxID");
    GET('blogs/'+id+'/info').then((res) => {
      this.setState({
        blog: res.data.blog,
        tags: res.data.tags,
        loading: false,
      });
    })
    .catch((err) => console.log(err));
  };

  renderBlog(){
    const { blog } = this.state;
    const { tags } = this.state
    
    return (
      <div className="blog-box">
        <div className="container-fluid main-container">
          <div className="jumbotron">
            <div id ="blogTitle" className="text-rigth">{ blog.title }</div>

            <hr></hr>

            <div className="blog-grid">
              <date className="blog-date">
                { blog.date }
              </date>
              
              <div className="blog-tags blog-grid">
                { tags.map(tag =>
                  <tags key={ tag.id }>{ tag.tag_name }</tags>
                )}
              </div>
            </div>

            <p>
              { blog.content }
            </p>

            <hr></hr>

            <div className="blog-comment">
              <div className="media border p-3">
                <img src="https://i1.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1" className="comment-img align-self-start mr-3 rounded-circle"></img>
                <div className="media-body">
                  <h4>User name 01 <small><i>Posted on "Date"</i></small></h4>
                  <p>This comment is and example</p>
                </div>
              </div>
              <div className="media border p-3">
                <img src="https://i1.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1" className="comment-img align-self-start mr-3 rounded-circle"></img>
                <div className="media-body">
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

  render() {
    const { loading } = this.state;
    const loadingWindow = <Loading/>;

    return (
      <div>
        { loading ? loadingWindow : this.renderBlog() }
      </div>
    );
  }
}