import { PLUGIN_NAME } from './config';

const menuItem = {
  label: PLUGIN_NAME,
  submenu: [{ label: 'Something' }]
};

export default menuItem;


/*
Common specs for Items
-----------------------
label: (string) - The title to show
action: (action object or a thunk) - A action object or a thunk, anything on which dispatch can be called. Essentially, it will do dispatch(item.action).
submenu: (array) - An array of sub MenuItems.
// Incase of Menu
------------------
Other MenuItems specified in Electron MenuItem doc would work as expected.
// PS: action would take precedence over click
// Except Menu cases
-------------------
click: (function) - A function to be called on onClick. It will be called without any arguments.
icon: (string) - Material Icon name // Not applicable for MenuItems
component: (function) - A function that returns a React Component or a React component class. //Not applicable for Menu Items
// PS: component - Using this option would mean everything except submenu wouldn't apply.
// PS: action would take precedence over click
*/
