import { createTheme } from '@mui/material/styles'
import { teal, deepOrange, red, green } from '@mui/material/colors'

type Theme = 'light' | 'dark'

// const defaultTheme: Theme = 'light'
const defaultTheme: Theme = 'dark'

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: deepOrange[500]
    },
    background: {
      default: '#eee'
    }
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        standardSuccess: {
          backgroundColor: green[100]
        },
        standardError: {
          backgroundColor: red[100]
        }
      }
    }
  }
})

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: teal.A700
    },
    background: {
      paper: '#111'
    }
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        standardSuccess: {
          backgroundColor: green[900]
        },
        standardError: {
          backgroundColor: red[900]
        }
      }
    }
  }
})

export type { Theme }

export { defaultTheme, lightTheme, darkTheme }
