import React from 'react';
import { arrayOf, object } from 'prop-types';
import Comment from './Comment';
import './Comment.scss';

const propTypes = {
  comments: arrayOf(object)
};

function CommentsContainer({ comments }) {
  return (
    <div className="Comments">
      <h2 className="CommentsTitle Text Text--medium">Комментарии</h2>
      {comments.map(comment => <Comment key={comment.id} {...comment} />)}
    </div>
  );
}

CommentsContainer.propTypes = propTypes;

export default CommentsContainer;
