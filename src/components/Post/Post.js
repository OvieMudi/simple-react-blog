import React from 'react';
import { Link } from 'react-router-dom';

import './Post.css';

const Post = props => {
  return (
    <Link to={`/${props.id}`}>
      <article className="Post" onClick={props.clicked}>
        <h1>{props.title}</h1>
        <div className="Info">
          <div className="Author">{props.author}</div>
        </div>
      </article>
    </Link>
  );
};

export default Post;
