import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import './Blog.css';
import Posts from '../Posts/Posts';
import NewPost from '../NewPost/NewPost';

class Blog extends Component {
  state = {
    auth: true
  };
  render() {
    const newPost = this.state.auth ? (
      <Route path="/new-post" exact component={NewPost} />
    ) : null;
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink
                  to="/posts"
                  activeClassName="active"
                  activeStyle={{
                    borderBottom: '1px solid gray',
                    padding: '10%'
                  }}
                >
                  Posts
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: '/new-post',
                    search: '?queryString=true',
                    hash: '#submit'
                  }}
                >
                  New Post
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          {newPost}
          <Route path="/posts" component={Posts} />
          <Redirect from="/" to="/posts" />
          <Route render={() => <h1>Not Found</h1>} />
        </Switch>
      </div>
    );
  }
}

export default Blog;
