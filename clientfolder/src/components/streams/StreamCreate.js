import React from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamCreate extends React.Component {

  onSubmit = (formValues) => {
    // Redux form takes care of e.preventDefault for us, so no need to call it.
    this.props.createStream(formValues);
  };

  render() {
    return (
       <div>
        <h3>Create a Stream</h3>
        <StreamForm onSubmit={this.onSubmit} />
       </div>
    )
  };
}

export default connect(null, { createStream })(StreamCreate);

// OR
// export default connect(null, { createStream })(reduxForm({
//   form: 'streamCreate',
//   validate
// })(StreamCreate));
