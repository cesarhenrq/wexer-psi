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
    info: {
      main: '#2F80ED',
    },
  },
  typography: {
    fontFamily: 'Montserrat',
    h6: {
      fontSize: 18,
    },
    caption: { fontSize: 14 },
    subtitle1: { fontSize: 12 },
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        paperAnchorLeft: {
          top: '80px',
        },
      },
    },
  },
});

export default theme;
