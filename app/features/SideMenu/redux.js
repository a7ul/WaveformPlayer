import { createAction } from 'redux-actions';

const ADD_TO_SIDE_MENU = 'SIDEMENU/ADD_TO_SIDE_MENU';
const SET_SIDE_MENU_EDITABLE = 'SIDEMENU/SET_SIDE_MENU_EDITABLE';
const SET_SIDE_MENU_VISIBILITY = 'SIDEMENU/SET_SIDE_MENU_VISIBILITY';

// Actions
export const addToSideMenu = createAction(ADD_TO_SIDE_MENU);
export const setSideMenuEditable = createAction(SET_SIDE_MENU_EDITABLE);
export const setSideMenuVisibility = createAction(SET_SIDE_MENU_VISIBILITY);

// Initial State
const defaultState = {
  items: [],
  editable: false,
  visible: true
};

// Reducers
export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_TO_SIDE_MENU: {
      const sideMenuItem = { ...action.payload, collapsed: true };
      return { ...state, items: [...state.items, sideMenuItem] };
    }
    case SET_SIDE_MENU_EDITABLE: {
      return { ...state, editable: !!action.payload };
    }
    case SET_SIDE_MENU_VISIBILITY: {
      return { ...state, visible: !!action.payload };
    }
    default: {
      return state;
    }
  }
};
