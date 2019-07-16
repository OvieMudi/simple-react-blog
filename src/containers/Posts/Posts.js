import React, { Component } from 'react';
import Post from '../../components/Post/Post';
import axios from '../../axios';
import './Posts.css';

class Posts extends Component {
  state = {
    posts: [],
    postId: null,
    error: false
  };

  componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/posts/')
      .then(res => {
        let posts = res.data.slice(0, 4);
        this.setState({ posts });
      })
      .catch(error => {
        console.log(error);
      });
  }

  selectedPostHandler = id => {
    this.setState({ postId: id });
  };

  render() {
    const posts = this.state.posts.map(post => {
      post = { ...post, author: 'Max' };
      return (
        <Post
          key={post.id}
          title={post.title}
          author={post.author}
          clicked={() => this.selectedPostHandler(post.id)}
        />
      );
    });
    return <section className="Posts">{posts}</section>;
  }
}

export default Posts;
