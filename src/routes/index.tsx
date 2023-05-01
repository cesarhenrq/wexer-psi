import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RecordPage from '../pages/record-page';
import BaseLayout from '../pages/base-layout';
import SessionPage from '../pages/session-page';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<BaseLayout />}>
        <Route path="prontuário" element={<RecordPage />} index />
        <Route path="sessão" element={<SessionPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default Router;
