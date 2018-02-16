import { createAction } from 'redux-actions';

const ADD_TO_SIDE_MENU = 'SIDEMENU/ADD_TO_SIDE_MENU';
const SET_SIDE_MENU_EDITABLE = 'SIDEMENU/SET_SIDE_MENU_EDITABLE';

// Actions
export const addToSideMenu = createAction(ADD_TO_SIDE_MENU);
export const setSideMenuEditable = createAction(SET_SIDE_MENU_EDITABLE);

// Initial State
const defaultState = {
  items: [],
  editable: true
};

// Reducers
export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_TO_SIDE_MENU: {
      return { ...state, items: [...state.items, action.payload] };
    }
    case SET_SIDE_MENU_EDITABLE: {
      return { ...state, editable: !!action.payload };
    }
    default: {
      return state;
    }
  }
};
