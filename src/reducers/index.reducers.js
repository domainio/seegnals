import { combineReducers } from 'redux';
import EventReducer from './Event.reducer';
import DrawerReducer from './Drawer.reducer';
import SpinnerReducer from './Spinner.reducer';

export default combineReducers({
  events: EventReducer,
  drawer: DrawerReducer,
  spinner: SpinnerReducer,
});