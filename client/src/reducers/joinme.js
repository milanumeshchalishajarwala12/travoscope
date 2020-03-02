import {
  ADDJOINME_SUCCESS,
  GETJOINME_SUCCESS,
  JOINME_FAIL
} from "../actions/constants";

const initialState = {
  joinmes: {},
  joinme: null,
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADDJOINME_SUCCESS:
      return {
        ...state,
        joinmes: [payload, ...state.joinmes],
        loading: false
      };
    case JOINME_FAIL:
      return {
        ...state,
        loading: false,
        error: payload
      };
    case GETJOINME_SUCCESS:
      return {
        ...state,
        loading: false,
        joinmes: payload
      };

    default:
      return state;
  }
}
