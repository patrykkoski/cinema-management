import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../util";

const initialState = {
  token: null,
  userRole: null,
  error: null,
  isLoading: false
};

const authStart = (state, action) => {
  return updateObject(state, { error: null });
};

const authSuccess = (state, action) => {
  return updateObject(state, {
    token: action.idToken,
    userRole: action.userRole,
    error: null
  });
};

const authFail = (state, action) => {
  return updateObject(state, {
    token: null,
    userRole: null,
    error: action.error
  });
};

const authLogout = (state, action) => {
  return updateObject(state, {
    token: null,
    userRole: null
  });
};

const startLoading = (state, action) => {
  return updateObject(state, {
    isLoading: true
  });
};

const stopLoading = (state, action) => {
  return updateObject(state, {
    isLoading: false
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return authStart(state, action);
    case actionTypes.AUTH_SUCCESS:
      return authSuccess(state, action);
    case actionTypes.AUTH_FAIL:
      return authFail(state, action);
    case actionTypes.AUTH_LOGOUT:
      return authLogout(state, action);
    case actionTypes.START_LOADING:
      return startLoading(state, action);
    case actionTypes.STOP_LOADING:
      return stopLoading(state, action);
    default:
      return state;
  }
};

export default reducer;
