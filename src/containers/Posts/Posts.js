import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Post from '../../components/Post/Post';
import FullPost from '../FullPost/FullPost';
import Aux from '../hoc/AuxWrapper';
import axios from '../../axios';
import './Posts.css';

class Posts extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    axios
      .get('/posts')
      .then(res => {
        let posts = res.data.slice(0, 4);
        this.setState({ posts });
      })
      .catch(error => {
        console.log(error);
      });
  }

  selectedPostHandler = id => {
    this.props.history.push({ pathname: '/posts/' + id });
  };

  render() {
    const posts = this.state.posts.map(post => {
      post = { ...post, author: 'Max' };
      return (
        <Post
          key={post.id}
          id={post.id}
          title={post.title}
          author={post.author}
          selectedPost={() => this.selectedPostHandler(post.id)}
        />
      );
    });
    return (
      <Aux>
        <section className="Posts">{posts}</section>
        <Route
          path={this.props.match.url + '/:id'}
          exact
          component={FullPost}
        />
      </Aux>
    );
  }
}

export default Posts;
