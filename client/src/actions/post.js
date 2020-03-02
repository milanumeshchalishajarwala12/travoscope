import axios from "axios";
import { setAlert } from "./alert";
import { GET_POSTS, POST_ERROR, DELETE_POST, ADD_POST } from "./constants";

// Get Posts

export const getPosts = () => async dispatch => {
  try {
    const res = await axios.get("/api/posts");
    dispatch({ type: GET_POSTS, payload: res.data });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Delete Post

export const deletePost = id => async dispatch => {
  try {
    const res = await axios.delete(`/api/posts/${id}`);
    dispatch({ type: DELETE_POST, payload: id });
    dispatch(setAlert("Post Deleted", "success"));
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Add Post

export const addPost = ({ title, text }) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const body = JSON.stringify({
    title,
    text
  });
  try {
    const res = await axios.post("/api/posts", body, config);
    dispatch({ type: ADD_POST, payload: res.data });
    dispatch(setAlert("Post Created", "success"));
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
