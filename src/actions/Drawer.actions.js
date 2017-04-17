export const OPEN_DRAWER = 'OPEN_DRAWER';
export const CLOSE_DRAWER = 'CLOSE_DRAWER';
export const CHANGE_MATERIAL = 'CHANGE_MATERIAL';
export const CHANGE_PLATFORM = 'CHANGE_PLATFORM';

export const openDrawer = () => {
  console.log('action open drawer');
  return {
    type: OPEN_DRAWER,
  };
};

export const closeDrawer = () => {
  return {
    type: CLOSE_DRAWER,
  };
};

export const changeMaterial = () => {
  return {
    type: CHANGE_MATERIAL,
  };
};

export const changePlatform = () => {
  return {
    type: CHANGE_PLATFORM,
  };
};