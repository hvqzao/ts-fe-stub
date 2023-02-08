import React from 'react'
import IconButton from '@mui/material/IconButton'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import { Context } from 'app/client/context'

const ThemeSwitcher = () => {
  const { theme, setTheme } = React.useContext(Context)
  const changeTheme = React.useCallback(() => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    window.sessionStorage.setItem('theme', newTheme)
    setTheme(newTheme)
  }, [setTheme, theme])
  return (
    <IconButton onClick={changeTheme}>
      {theme === 'dark' ? <DarkModeIcon /> : <LightModeIcon />}
    </IconButton>
  )
}

export default ThemeSwitcher
