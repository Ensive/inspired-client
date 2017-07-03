import React from 'react';
import { arrayOf, object } from 'prop-types';
import Comment from './Comment';
import './Comment.scss';

const propTypes = {
  comments: arrayOf(object)
};

// TODO: move this filter to the server (would be much better)
function getApprovedComments(comments) {
  return comments.filter(comment => comment.approved);
}

function CommentsContainer({ comments }) {
  const approvedComments = getApprovedComments(comments);
  return (
    <div className="Comments">
      <h2 className="CommentsTitle Text Text--big">Комментарии</h2>
      {approvedComments.map(comment => <Comment key={comment.id} {...comment} />)}
    </div>
  );
}

CommentsContainer.propTypes = propTypes;

export default CommentsContainer;
