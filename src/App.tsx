import { ThemeProvider } from '@mui/material/styles';
import { Normalize } from 'styled-normalize';
import { login } from './services/user';
import { PatientDataContext } from './contexts/PatientDataContext';
import { ModalContext } from './contexts/ModalContext';
import { ServicesContext } from './contexts/ServicesContext';
import { ServiceContext } from './contexts/ServiceContext';
import { OccurrencesContext } from './contexts/OccurrencesContext';
import usePatientData from './hooks/use-patient-data';
import useServices from './hooks/use-services';
import useModal from './hooks/use-modal';
import { useState } from 'react';
import Router from './routes';
import theme from './theme';

function App() {
  login();

  const { patientData, setPatientData } = usePatientData();

  const { modalsState, setModalsState } = useModal();

  const { services, setServices } = useServices();

  const [service, setService] = useState({ serviceName: '', _id: '' });

  const [occurrences, setOccurrences] = useState<OccurrenceType[]>([]);

  return (
    <ThemeProvider theme={theme}>
      <ModalContext.Provider value={{ setModalsState, modalsState }}>
        <PatientDataContext.Provider value={{ patientData, setPatientData }}>
          <ServicesContext.Provider value={{ services, setServices }}>
            <ServiceContext.Provider value={{ service, setService }}>
              <OccurrencesContext.Provider
                value={{ occurrences, setOccurrences }}
              >
                <div className="App">
                  <Normalize />
                  <Router />
                </div>
              </OccurrencesContext.Provider>
            </ServiceContext.Provider>
          </ServicesContext.Provider>
        </PatientDataContext.Provider>
      </ModalContext.Provider>
    </ThemeProvider>
  );
}

export default App;
