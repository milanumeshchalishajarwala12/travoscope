import axios from "axios";
import { setAlert } from "./alert";
import { Redirect } from "react-router-dom";

import { ADDJOINME_SUCCESS, GETJOINME_SUCCESS, JOINME_FAIL } from "./constants";

export const addJoinme = ({ firstname, lastname, email }) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const body = JSON.stringify({
    firstname,
    lastname,
    email
  });
  try {
    const res = await axios.post("/api/joinmes", body, config);
    dispatch(
      setAlert(
        "Congratulations, you are successfully added to the list",
        "success"
      )
    );
  } catch (err) {
    dispatch(setAlert("You are already on the list", "danger"));
  }
};

// Get Posts

export const getJoinme = () => async dispatch => {
  try {
    const res = await axios.get("/api/joimes");
  } catch (err) {}
};
