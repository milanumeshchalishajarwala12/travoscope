import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import post from "./post";
import joinme from "./joinme";

export default combineReducers({ alert, auth, post, joinme });
