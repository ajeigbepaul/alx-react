// actions/uiActionCreators.js
import { connect } from "react-redux";
import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from "./uiActionTypes";

export const login = (email, password) => ({
  type: LOGIN,
  user: { email, password },
});

export const logout = () => ({
  type: LOGOUT,
});

export const displayNotificationDrawer = () => ({
  type: DISPLAY_NOTIFICATION_DRAWER,
});

export const hideNotificationDrawer = () => ({
  type: HIDE_NOTIFICATION_DRAWER,
});
export const loginSuccess = () => ({
  type: LOGIN_SUCCESS,
});

export const loginFailure = () => ({
  type: LOGIN_FAILURE,
});

export const loginRequest = (email, password) => (dispatch) => {
  dispatch(login(email, password));

  fetch("../../../login-success.json") // Replace with your API endpoint
    .then((response) => {
      if (response.ok) {
        dispatch(loginSuccess());
      } else {
        dispatch(loginFailure());
      }
    })
    .catch(() => {
      dispatch(loginFailure());
    });
};
const mapDispatchToProps = (dispatch) => {
  return {
    boundLogin: (email, password) => dispatch(login(email, password)),
    boundLogout: () => dispatch(logout()),
    boundDisplayNotificationDrawer: () => dispatch(displayNotificationDrawer()),
    boundHideNotificationDrawer: () => dispatch(hideNotificationDrawer()),
  };
};

export default connect(null, mapDispatchToProps)(YourComponent);