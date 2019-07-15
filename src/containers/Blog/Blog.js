import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
  state = {
    posts: [],
    postId: null
  };
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts/').then(res => {
      let posts = res.data.slice(0, 4);
      this.setState({ posts });
    });
  }

  setFullPostId = id => {
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
          clicked={() => this.setFullPostId(post.id)}
        />
      );
    });
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/new-post">New Post</a>
              </li>
            </ul>
          </nav>
        </header>
        <section className="Posts">{posts}</section>
        <section>
          <FullPost id={this.state.postId} posts={this.state.posts} />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;
