import React, { Fragment, useEffect } from "react";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Alert from "./components/layout/Alert";
import Posts from "./components/posts/Posts";
import JoinMe from "./components/joinme/JoinMe";
import Admin_login from "./components/admin/Admin_login";
import Admin_posts from "./components/admin/Admin_posts";
import Admin_joinme from "./components/admin/Admin_joinme";
import AboutMe from "./components/layout/AboutMe";

import PrivateRoute from "./components/routing/PrivateRoute";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//Redux
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}
const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  });

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <section>
            <Navbar />
            <Route exact path="/" component={Landing} />
            <section className="container">
              <Alert />
              <Switch>
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/posts" component={Posts} />
                <Route exact path="/adminlogin" component={Admin_login} />
                <Route exact path="/aboutme" component={AboutMe} />

                <PrivateRoute
                  exact
                  path="/adminposts"
                  component={Admin_posts}
                />
                <PrivateRoute
                  exact
                  path="/adminjoinme"
                  component={Admin_joinme}
                />
                <PrivateRoute exact path="/joinme" component={JoinMe} />
              </Switch>
            </section>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
