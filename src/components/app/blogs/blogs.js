import React from 'react';
import './blogs.css';
import { GET, POST } from './../../../JS/constants/api';
import { Link } from "react-router-dom";
import axios from 'axios';

export class Blogs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: [],
      loading: true
    };
  }

  componentDidMount() {
    axios({
      method: "GET",
      url: "http://localhost:4200/blogs",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwtToken")
        //'Authorization': "Bearer " + localStorage.getItem("jwtToken")
      }
    });
  };

  renderBlogs() {
    const { blogs } = this.state;

    return (
      <div className="blog-box">
        <div className="container-fluid main-container">
          <div className="jumbotron">
            <div id="listTitle" className="text-rigth">Lista de Blogs</div>

            <hr></hr>

            <div className="blogs">
              {blogs.map(blog =>
                <div key={blog.id} className="media border p-3">
                  <div className="media-body">
                    <div id='blogsTitle'>{blog.title}</div>

                    <div className='blogs-grid'>
                      <div className='blogs-date'>
                        <small><i>{blog.date}</i></small>
                      </div>

                      <div className='blogs-like'>
                        <i className='fa fa-heart' /> {blog.num_likes}
                      </div>

                      <Link to='/blog/info/'>ver más</Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }

  render() {
    const { loading } = this.state;
    return (
      <div>
        {loading ? 'loading...' : this.renderBlogs()}
      </div>
    );
  }
}