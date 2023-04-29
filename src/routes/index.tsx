import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RecordPage from '../pages/record-page';
import BaseLayout from '../pages/base-layout';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="" element={<BaseLayout />}>
        <Route path="prontuário" element={<RecordPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default Router;
