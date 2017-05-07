import { CREATE_EVENT, FETCH_EVENTS_SUCCESS } from '../actions/index.actions';
import values from 'lodash/values';
import map from 'lodash/map';

const INITIAL_STATE = {
  events: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_EVENT:
      return INITIAL_STATE;
    case FETCH_EVENTS_SUCCESS:
      const events = map(action.events, (event, uid) => ({...event, uid}));
      return { ...state, events };
    default:
      return state;
  }
};