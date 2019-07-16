import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {
  state = {
    post: {}
  };

  componentDidUpdate() {
    if (this.props.id && this.state.post.id !== this.props.id) {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${this.props.id}`)
        .then(res => {
          console.log(res.data);

          this.setState({ post: res.data });
        })
        .catch(err => {
          console.log(err.message);
        });
    }
  }

  render() {
    let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;
    if (this.props.id) {
      if (!this.state.post.body) {
        console.log('loading...');
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
