import React from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

const StreamDelete = props => {
  return <div>StreamDelete</div>
};

const mapStateToProps = (state) => {
  return { stream: state }
};

export default connect()(StreamDelete);
