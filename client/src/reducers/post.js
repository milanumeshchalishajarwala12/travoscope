import {
  GET_POSTS,
  POST_ERROR,
  DELETE_POST,
  ADD_POST
} from "../actions/constants";

const initialState = {
  posts: {},
  post: null,
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_POSTS:
      return {
        ...state,
        loading: false,
        posts: payload
      };
    case ADD_POST:
      return {
        ...state,
        posts: [payload, ...state.posts],
        loadng: false
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post._id !== payload),
        loading: false
      };
    case POST_ERROR:
      return {
        ...state,
        loading: false,
        error: payload
      };
    default:
      return state;
  }
}
