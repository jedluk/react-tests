import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class CommentList extends Component {
  renderComments() {
    const { comments } = this.props;
    return comments.map(comment => <li key={comment}>{comment}</li>);
  }

  render() {
    return (
      <div>
        <h4>Comment List</h4>
        <ul>
          {this.renderComments()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { comments: state.comments };
}

CommentList.propTypes = {
  comments: PropTypes.instanceOf(Array),
};
CommentList.defaultProps = {
  comments: [],
};

export default connect(mapStateToProps)(CommentList);
