import React from 'react';
import { number, string } from 'prop-types';
// TODO: consider to get rid of moment (too much weight)
import moment from 'moment';

const propTypes = {
  // id: number.isRequired,
  author: string.isRequired,
  // authorEmail: string,
  body: string.isRequired,
  stars: number,
  // approved: bool.isRequired,
  // rank: number.isRequired,
  // ancestry: string,
  createdAt: string.isRequired
};

const defaultProps = {
  stars: 0
};

function renderStars(stars) {
  if (!stars) return null;
  const elements = [];

  for (let i = 0; i < stars; i += 1) {
    elements.push(<i key={i} className="CommentStar Text Text--regular" />);
  }

  // empty stars
  if (stars < 5) {
    for (let k = 0; k < 5 - stars; k += 1) {
      elements.push(<i key={k + stars} className="CommentStar Text Text--regular CommentStar--gray" />);
    }
  }

  return elements;
}

// id, authorEmail, rank, ancestry, approved
function Comment({ author, body, stars, createdAt }) {
  return (
    <div className="Comment">
      <header className="CommentMeta">
        <span className="CommentAuthor Text Text--regular">
          {author}
        </span>
        <span className="CommentStars">
          {renderStars(stars)}
        </span>
        <time className="Text Text--small Text--light Text--light-gray u-right">
          {moment(createdAt).fromNow()}
        </time>
      </header>

      <p className="CommentText Text Text--regular">
        {body}
      </p>
    </div>
  );
}

Comment.propTypes = propTypes;
Comment.defaultProps = defaultProps;

export default Comment;
