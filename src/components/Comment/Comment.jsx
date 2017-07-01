import React from 'react';
import { number, string, bool } from 'prop-types';
// TODO: consider to get rid of moment
import moment from 'moment';

const propTypes = {
  id: number.isRequired,
  author: string.isRequired,
  authorEmail: string,
  body: string.isRequired,
  stars: number,
  approved: bool.isRequired,
  rank: number.isRequired,
  ancestry: string,
  createdAt: string
};

function renderStars() {}

function Comment({ id, author, authorEmail, body, stars, approved, rank, ancestry, createdAt }) {
  return (
    <div className="Comment">
      <header className="CommentMeta">
        {false && stars}
        <span className="Text Text--regular Text--light-gray">
          {`${author} ${moment(createdAt).fromNow()}`}
        </span>
      </header>

      <div className="u-clear" />

      <p className="Text Text--regular">{body}</p>

    </div>
  );
}

Comment.propTypes = propTypes;

export default Comment;
