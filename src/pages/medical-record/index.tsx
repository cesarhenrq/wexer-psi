import DataPatientCard from '../../components/data-patient-card';
import GenericCard from '../../components/generic-card';
import ModalToolBar from '../../components/modal-tool-bar';
import Modals from '../../components/modals';
import PacientTimeLine from '../../components/pacient-time-line';
import * as S from './styles';

const MedicalRecord = () => {
  const content =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit blanditiis nobis, quas quibusdam porro commodi consequuntur libero velit necessitatibus optio distinctio corrupti totam, non fugiat quaerat magni enim sit numquam';
  return (
    <S.Grid>
      <S.CardContainer>
        <DataPatientCard />
        <GenericCard
          title="Demandas e objetivos"
          content={content}
          modal="isGoalsRequirementsModalOpen"
        />
        <GenericCard
          title="Anotações pessoais"
          content={content}
          modal="isPersonalNotesModalOpen"
        />
      </S.CardContainer>
      <S.ModalToolBarContainer>
        <ModalToolBar />
      </S.ModalToolBarContainer>
      <S.ContentContainer>
        <PacientTimeLine />
        <Modals />
      </S.ContentContainer>
    </S.Grid>
  );
};

export default MedicalRecord;
