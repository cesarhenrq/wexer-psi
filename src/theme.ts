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
      light: '#F5F5F5',
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
    MuiStepIcon: {
      styleOverrides: {
        root: {
          '&.Mui-completed': {
            color: '#C5F2E0',
          },
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          fontSize: '14px',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '& .MuiInputBase-input': {
            fontSize: '14px',
          },
          '& .MuiInputLabel-root': {
            fontSize: '14px',
          },
        },
      },
    },
  },
});

export default theme;
