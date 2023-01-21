import React from 'react'

const ThemeContext = React.createContext({
  isDarkTheme: false,
  changeTheme: () => {},
  savedVideosList: [],
  saveVideo: () => {},
  removeVideo: () => {},
})

export default ThemeContext
