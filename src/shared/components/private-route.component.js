import React from "react";
import { Route, Redirect } from "react-router-dom";
import AuthService from "./../../features/user-register/services/auth.service";
import TokenManagerService from "./../../features/user-register/services/token-manager.service";
const PrivateRoute = (privateRouteProps) => (
  <Route
    path={privateRouteProps.path}
    render={(props) => {
      if (localStorage.getItem("user"))
        TokenManagerService.manageTheCurrentToken();
      let response;
      console.log(TokenManagerService.isThereAccessToken())
      if (TokenManagerService.isThereAccessToken()) {
        if (privateRouteProps.currentComponent === "login" ) {
          if (AuthService.getUserRole() === "ROLE_ADMIN")
            response = (
              <Route
                exact
                strict
                path="*"
                render={() => <Redirect to="/home" />}
              />
            );
        } else {
          response = <privateRouteProps.component {...props} />;
        }
      } else if (privateRouteProps.currentComponent === "login") {
        response = <privateRouteProps.component {...props} />;
      } else {
        response = (
          <Redirect
            to={{
              pathname: "/login",
              state: { originUrl: props.location.pathname },
            }}
          />
        );
      }
      return response;
    }}
  />
);
export default PrivateRoute;
