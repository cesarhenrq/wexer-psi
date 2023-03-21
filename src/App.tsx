import { ThemeProvider } from '@mui/material/styles';
import { Normalize } from 'styled-normalize';
import Router from './routes';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Normalize />
        <Router />
      </div>
    </ThemeProvider>
  );
}

export default App;
