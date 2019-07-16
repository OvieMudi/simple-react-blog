import React, { Component } from 'react';
import axios from '../../axios';

import './FullPost.css';

class FullPost extends Component {
  state = {
    post: {}
  };

  componentDidMount() {
    const postId = this.props.match.params.id;

    if (postId && this.state.post.id !== postId) {
      axios
        .get(`/posts/${postId}`)
        .then(res => {
          this.setState({ post: res.data });
        })
        .catch(err => {
          console.log(err.message);
        });
    }
  }

  render() {
    let post = null;
    if (this.props.match.params.id) {
      if (!this.state.post.body) {
        post = <p style={{ textAlign: 'center' }}>Loading...</p>;
      }

      const postObject = this.state.post;
      post = (
        <div className="FullPost">
          <h1>{postObject.title}</h1>
          <p>{postObject.body}</p>
          <div className="Edit">
            <button className="Delete">Delete</button>
          </div>
        </div>
      );
    }

    return post;
  }
}

export default FullPost;
