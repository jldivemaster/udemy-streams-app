import _ from 'lodash';
import { FETCH_STREAM, FETCH_STREAMS, CREATE_STREAM,
          EDIT_STREAM, DELETE_STREAM } from '../actions/types';

export default (state = {}, action) => {
  switch(action.type) {
    case FETCH_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_STREAM:
      return _.omit(state, action.payload);
    case FETCH_STREAMS:
      return { ...state, ..._.mapKeys(action.payload, 'id') };
    default:
      return state;
  }
};

// Array-based approach (for comparison):
// const streamReducer = (state = [], action) => {
//   switch(action.type) {
//     case EDIT_STREAM:
//       return state.map(stream => {
//         if(stream.id === action.payload.id) {
//           return action.payload;
//         } else {
//           return stream;
//         }
//       })
//     default:
//       return state;
//   }
// };


// Object-based approach (more straightforward):
// const streamReducer = (state ={}, action) => {
//   switch(action.type) {
//     case EDIT_STREAM:
                    // const newState = { ...state };
                    // newState[action.payload.id] = action.payload;
                    // return newState;
              // ^ SAME AS :
                    //       return { ...state, [action.payload.id]: action.payload };
                    //     default:
//       return state;
//   }
// }
