import { createTheme, Shadows } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#009d4d',
      dark: '#208451',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#ff3e61',
      dark: '#ba000d',
      contrastText: '#fff',
    },
  },
})
export default theme
