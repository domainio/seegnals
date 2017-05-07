import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';
import { FETCH_EVENTS_SUCCESS, FETCH_EVENTS_FAILED, CREATE_EVENT_SUCCESS, CREATE_EVENT_FAILED } from './index.actions';


const fetchEvent = (filters) => {

};

export const fetchEvents = (filter) => {
  return (dispatch) => {
    const { uid } = firebase.auth().currentUser;
    firebase.database().ref(`events/${uid}`)
      .on('value', snapshot => {
        dispatch({ type: FETCH_EVENTS_SUCCESS, events: snapshot.val() });
      }, error => {
        console.log(error);
        dispatch({ type: FETCH_EVENTS_FAILED, payload: error });
      });
  };
};


export const createEvent = (event) => {
  const { uid } = firebase.auth().currentUser;
  return (dispatch) => {
    firebase.database().ref(`/events/${uid}`)
      .push(event)
      .then(res => {
        console.log(res);
        dispatch({ type: CREATE_EVENT_SUCCESS });
        Actions.main();
      }).catch(ex => {
        dispatch({ type: CREATE_EVENT_FAILED });
        console.log(ex)
      });
  };
};
