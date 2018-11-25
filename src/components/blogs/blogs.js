import React from 'react';
import './blogs.css';
import { GET, POST } from '../../JS/constants/api';

export class Blogs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: [],
      loading: true
    };
  }

  componentDidMount() {
    GET('blogs/').then((res) => {
      this.setState({
        blogs: res.data,
        loading: false,
      });
    }).catch((err) => console.log(err));
  };

  renderBlogs() {
    const { blogs } = this.state;
    const { tags } = this.state;

    return (
      <div className="blog-box">
        <div className="container-fluid main-container">
          <div className="jumbotron">
            <div id="listTitle" className="text-rigth">Lista de Blogs</div>

            <hr></hr>

            <div className="blogs">
              { blogs.map(blog =>
                <div key={ blog.id } className="media border p-3">
                    <div className="media-body">
                      <div id='blogsTitle'>{ blog.title }</div>

                      <div className='blogs-grid'>
                        <div className='blogs-date'>
                          <small><i>{ blog.date }</i></small>
                        </div>
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
    // const loadingWindow = <Loading/>;

    return (
      <div>
        { loading ? 'loading...' : this.renderBlogs() }
      </div>
    );
  }
}
