import { OPEN_DRAWER, CLOSE_DRAWER, CHANGE_PLATFORM, CHANGE_MATERIAL } from '../actions/Drawer.actions';

const INITIAL_STATE = {
  drawerState: 'closed',
  drawerDisabled: true,
  themeState: 'platform',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case OPEN_DRAWER:
      return {
        ...state,
        drawerState: 'opened',
      };
    case CLOSE_DRAWER:
      return {
        ...state,
        drawerState: 'closed',
      };
    case CHANGE_PLATFORM:
      return {
        ...state,
        themeState: 'platform',
      };
    case CHANGE_MATERIAL:
      return {
        ...state,
        themeState: 'material',
      };
    default:
      return state;
  }
}