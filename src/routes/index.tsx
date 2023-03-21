import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TabNav from '../components/tab-nav';
import BaseLayout from '../pages/base-layout';
import MedicalRecord from '../pages/medical-record';
import RegistrationData from '../pages/registration-data';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<BaseLayout />}>
        <Route path="/" element={<TabNav />}>
          <Route path="dados-cadastrais" element={<RegistrationData />} />
          <Route path="prontuário" element={<MedicalRecord />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);

export default Router;
