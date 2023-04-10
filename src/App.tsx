import { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { ModalContext } from './contexts/ModalContext';
import { Normalize } from 'styled-normalize';
import Router from './routes';
import theme from './theme';

function App() {
  const [modalsState, setModalsState] = useState<ModalsStateT>({
    isSessionModalOpen: false,
    isPertinentFactModalOpen: false,
    isAttachmentModalOpen: false,
    isPsychologicalAssessmentModalOpen: false,
    isGoalsRequirementsModalOpen: false,
    isPersonalNotesModalOpen: false,
    isDeleteModalOpen: false,
  });

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
