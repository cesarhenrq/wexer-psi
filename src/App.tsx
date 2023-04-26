import { ThemeProvider } from '@mui/material/styles';
import { ModalContext } from './contexts/ModalContext';
import { Normalize } from 'styled-normalize';
import Router from './routes';
import theme from './theme';
import useModal from './hooks/use-modal';
import { login } from './services/user';

function App() {
  login();

  const { modalsState, setModalsState } = useModal();

  return (
    <ThemeProvider theme={theme}>
      <ModalContext.Provider value={{ setModalsState, modalsState }}>
        <div className="App">
          <Normalize />
          <Router />
        </div>
      </ModalContext.Provider>
    </ThemeProvider>
  );
}

export default App;
