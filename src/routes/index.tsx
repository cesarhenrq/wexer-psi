import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TabNav from '../components/tab-nav';
import BaseLayout from '../pages/base-layout';
import MedicalRecord from '../pages/medical-record';
import RegistrationData from '../pages/registration-data';
import PsychologicalAssessment from '../components/psychological-assessment';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<BaseLayout />}>
        <Route element={<TabNav />}>
          <Route index element={<RegistrationData />} />
          <Route path="dados-cadastrais" element={<RegistrationData />} />
          <Route path="prontuário" element={<MedicalRecord />} />
        </Route>
        <Route
          path="entrevista-psicologica"
          element={<PsychologicalAssessment />}
        />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default Router;
