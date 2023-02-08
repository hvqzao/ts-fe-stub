import React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import { defaultTheme, lightTheme, darkTheme } from 'app/client/theme'

import type { Theme } from 'app/client/theme'

type ContextType = {
  theme: Theme
  setTheme: React.Dispatch<React.SetStateAction<Theme>>
}

const initialContext = {
  theme: defaultTheme,
  setTheme: (theme: React.SetStateAction<Theme>) => theme
}

const Context = React.createContext<ContextType>(initialContext)

type ContextProviderProps = {
  children: React.ReactNode | React.ReactNode[]
}

const ContextProvider = ({ children }: ContextProviderProps) => {
  const [theme, setTheme] = React.useState(defaultTheme)
  React.useEffect(() => {
    const newTheme = window.sessionStorage.getItem('theme') as Theme
    setTheme(newTheme || defaultTheme)
  }, [])
  const providerValue = React.useMemo(
    () => ({
      theme,
      setTheme
    }),
    [theme]
  )
  return (
    <Context.Provider value={providerValue}>
      <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </Context.Provider>
  )
}

export { Context }

export default ContextProvider
