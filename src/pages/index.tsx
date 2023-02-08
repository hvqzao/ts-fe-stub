import React from 'react'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'
import SimpleLayout from 'app/client/layouts/simple-layout'

const Home = () => {
  const [username, setUsername] = React.useState('')
  const [success, setSuccess] = React.useState('')
  const [error, setError] = React.useState('')
  const closeAlert = React.useCallback(() => {
    setSuccess('')
    setError('')
  }, [])
  const onChangeUsername = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setUsername(event.target.value)
    },
    []
  )
  const onSubmitForm = React.useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      setUsername('')
      try {
        const response = await fetch('/api/hello', {
          method: 'POST',
          body: JSON.stringify({ username })
        })
        const json = await response.json()
        setSuccess(`Received from server: ${JSON.stringify(json)}`)
      } catch (err) {
        setError('Failed.')
      }
    },
    [username]
  )
  return (
    <SimpleLayout>
      <Box component="form" onSubmit={onSubmitForm}>
        <Stack spacing={3}>
          <TextField
            label="Username"
            placeholder="Type your name"
            variant="outlined"
            autoComplete="off"
            size="small"
            fullWidth
            value={username}
            onChange={onChangeUsername}
          />
          <Button variant="contained" type="submit" fullWidth>
            Submit
          </Button>
        </Stack>
      </Box>
      <Snackbar
        open={error.length > 0 || success.length > 0}
        autoHideDuration={5000}
        onClose={closeAlert}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert
          onClose={closeAlert}
          severity={error.length > 0 ? 'error' : 'success'}
          elevation={3}
        >
          {error.length > 0 ? error : success}
        </Alert>
      </Snackbar>
    </SimpleLayout>
  )
}

export default Home
