import { useContext } from 'react';
import DataPatientCard from '../data-patient-card';
import GenericCard from '../generic-card';
import ModalToolBar from '../modal-tool-bar';
import Modals from '../modals';
import PacientTimeLine from '../pacient-time-line';
import { PatientDataContext } from '../../contexts/PatientDataContext';
import * as S from './styles';
import { ServiceContext } from '../../contexts/ServiceContext';

const MedicalRecord = () => {
  const {
    patientData: { demands, personalAnnotations },
  } = useContext(PatientDataContext);

  const { service } = useContext(ServiceContext);

  return (
    <S.Grid>
      <S.CardContainer>
        <DataPatientCard />
        {service.serviceName !== '' && (
          <GenericCard
            title="Demandas e objetivos"
            content={demands}
            modal="isServiceModalOpen"
          />
        )}

        <GenericCard
          title="Anotações pessoais"
          content={personalAnnotations}
          modal="isPersonalNotesModalOpen"
        />
      </S.CardContainer>
      <S.ModalToolBarContainer>
        <ModalToolBar />
      </S.ModalToolBarContainer>
      <S.ContentContainer>
        {service.serviceName !== '' && <PacientTimeLine />}
        <Modals />
      </S.ContentContainer>
    </S.Grid>
  );
};

export default MedicalRecord;
