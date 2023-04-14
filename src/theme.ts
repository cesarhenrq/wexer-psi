import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#00995D',
      light: '#C5F2E0',
      dark: '#017849',
    },
    secondary: {
      main: '#FFFFFF',
      dark: '#616161',
    },
  },
  typography: {
    fontFamily: 'Montserrat',
    h6: {
      fontSize: 18,
    },
  },
});

export default theme;
