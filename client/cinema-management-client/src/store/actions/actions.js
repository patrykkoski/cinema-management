import * as actionTypes from "./actionTypes";
import axios from "axios";

export const startLoading = () => {
  return {
    type: actionTypes.START_LOADING
  };
};

export const stopLoading = () => {
  return {
    type: actionTypes.STOP_LOADING
  };
};

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  };
};

export const authSuccess = (token, userRole) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    idToken: token,
    userRole: userRole
  };
};

export const authFail = error => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error
  };
};

export const authLogout = () => {
  return {
    type: actionTypes.AUTH_LOGOUT
  };
};

export const logout = () => {
  return dispatch => {
    if (localStorage.getItem("token")) {
      localStorage.removeItem("token");
    }
    if (localStorage.getItem("role")) {
      localStorage.removeItem("role");
    }
    dispatch(authLogout());
  };
};

export const auth = (login, password) => {
  return dispatch => {
    dispatch(authStart());
    dispatch(startLoading());
    axios
      .post("http://localhost:8080/public/auth/login", {
        username: login,
        password: password
      })
      .then(response => {
        console.log(response);
        dispatch(authSuccess(response.data.jwt, response.data.roleId));
        localStorage.setItem("token", response.data.jwt);
        localStorage.setItem("role", response.data.roleId);
        setTimeout(() => {
          dispatch(stopLoading());
        }, 1500);
      })
      .catch(err => {
        dispatch(authFail(err));
        dispatch(stopLoading());
      });
  };
};

export const authCheckState = token => {
  return dispatch => {
    if (token) {
      dispatch(startLoading());
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      axios
        .get("http://localhost:8080/current")
        .then(response => {
          console.log(response);
          localStorage.setItem("token", token);
          localStorage.setItem("role", response.data.role);
          dispatch(authSuccess(token, response.data.role));
          dispatch(stopLoading());
        })
        .catch(error => {
          dispatch(authFail(error));
          dispatch(logout());
          dispatch(stopLoading());
        });
    }
  };
};

export const register = userData => {
  return dispatch => {
    dispatch(startLoading());
    axios
      .post("http://localhost:8080/public/auth/register", {
        username: userData.username,
        password: userData.password,
        firstname: userData.firstname,
        lastname: userData.lastname,
        email: userData.email
      })
      .then(response => {
        console.log(response);
        dispatch(stopLoading());
        dispatch(auth(userData.username, userData.password));
      })
      .catch(err => {
        alert(err.response.data.message);
        dispatch(stopLoading());
      });
  };
};
