export default {
  label: 'Playlist',
  submenu: [
    {
      label: 'Favourite',
      click: () => alert('yo'),
      submenu: [
        { label: 'Subsubmenu' }
      ]
    },
    { label: 'something' }
  ]
};

