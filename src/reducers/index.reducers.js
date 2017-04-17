import { combineReducers } from 'redux';
import EventReducer from './Event.reducer';
import DrawerReducer from './Drawer.reducer';

export default combineReducers({
  events: EventReducer,
  drawer: DrawerReducer,
});