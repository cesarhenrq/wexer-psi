import { ThemeProvider } from '@mui/material/styles';
import { Normalize } from 'styled-normalize';
import BaseLayout from './components/base-layout';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Normalize />
        <BaseLayout />
      </div>
    </ThemeProvider>
  );
}

export default App;
