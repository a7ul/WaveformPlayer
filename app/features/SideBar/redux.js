import { createAction } from 'redux-actions';

const SET_SIDE_MENU_ITEMS = 'SIDEMENU/SET_SIDE_MENU_ITEMS';
const SET_SIDE_MENU_EDITABLE = 'SIDEMENU/SET_SIDE_MENU_EDITABLE';

// Actions
export const setSideMenuItems = createAction(SET_SIDE_MENU_ITEMS);
export const setSideMenuEditable = createAction(SET_SIDE_MENU_EDITABLE);

// Initial State
const defaultState = {
  items: [],
  editable: true
};

// Reducers
export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_SIDE_MENU_ITEMS: {
      return { ...state, items: action.payload };
    }
    case SET_SIDE_MENU_EDITABLE: {
      return { ...state, editable: !!action.payload };
    }
    default: {
      return state;
    }
  }
};
