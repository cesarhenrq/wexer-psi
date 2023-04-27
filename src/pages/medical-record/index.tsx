import { useContext } from 'react';
import DataPatientCard from '../../components/data-patient-card';
import GenericCard from '../../components/generic-card';
import ModalToolBar from '../../components/modal-tool-bar';
import Modals from '../../components/modals';
import PacientTimeLine from '../../components/pacient-time-line';
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
        <GenericCard
          title="Demandas e objetivos"
          content={demands}
          modal="isGoalsRequirementsModalOpen"
        />
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
        {service.serviceName === '' ? null : <PacientTimeLine />}
        <Modals />
      </S.ContentContainer>
    </S.Grid>
  );
};

export default MedicalRecord;
