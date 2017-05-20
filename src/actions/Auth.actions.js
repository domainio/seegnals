import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  GLOBAL_LOADING_START,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL
} from './index.actions';

// todo: OTP - use twillo - check error handling

export const loginUser = ({ username, password }) => {
  return (dispatch) => {
    dispatch({ type: GLOBAL_LOADING_START });
    firebase.auth().signInWithEmailAndPassword(username, password)
      .then(user => {
        console.log('existing user logged in: ', user);
        loginUserSuccess(dispatch, user);
      })
      .catch(ex => {
        console.log(ex);
        firebase.auth().createUserWithEmailAndPassword(username, password)
          .then(user => {
            console.log('new user logged in: ', user);
            loginUserSuccess(dispatch, user);
          })
          .catch(ex => {
            loginUserFail(dispatch);
            console.log(ex);
          });
      });
  }
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({ type: LOGIN_USER_SUCCESS, payload: user });
  Actions.main();
};

const loginUserFail = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAIL });
};