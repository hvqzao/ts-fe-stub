import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import ThemeSwitcher from 'app/client/components/theme-switcher'

type SimpleLayoutProps = {
  children: React.ReactNode | React.ReactNode[]
}

const SimpleLayout = ({ children }: SimpleLayoutProps) => (
  <>
    <AppBar color="inherit" elevation={2}>
      <Toolbar>
        <Box sx={{ flex: 1 }} />
        <ThemeSwitcher />
      </Toolbar>
    </AppBar>
    <Toolbar />
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Paper sx={{ p: 3 }} elevation={3}>
        {children}
      </Paper>
    </Container>
  </>
)

export default SimpleLayout
