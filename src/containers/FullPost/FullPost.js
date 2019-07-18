import React, { Component } from 'react';
import axios from '../../axios';

import './FullPost.css';

class FullPost extends Component {
  state = {
    post: {}
  };

  componentDidMount() {
    this.fetchData();
  }

  shouldComponentUpdate(nextProps) {
    console.log(nextProps.match.params.id, 'versus', this.state.post.id);

    return parseInt(nextProps.match.params.id, 10) !== this.state.post.id;
  }

  componentDidUpdate() {
    const postId = parseInt(this.props.match.params.id, 10);

    if (this.state.post.id && parseInt(postId, 10) !== this.state.post.id) {
      this.fetchData();
    }
  }

  fetchData = () => {
    axios
      .get(this.props.match.url)
      .then(res => {
        this.setState({ post: res.data });
      })
      .catch(err => {
        console.log(err.message);
      });
  };

  render() {
    // console.log('[render in fullpost]', this.props.match.params);
    let post = null;
    if (!this.state.post.body) {
      post = <p style={{ textAlign: 'center' }}>Loading...</p>;
    } else {
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
