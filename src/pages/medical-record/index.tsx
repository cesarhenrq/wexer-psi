import { useState } from 'react';
import { ModalContext } from '../../contexts/ModalContext';
import DataPatientCard from '../../components/data-patient-card';
import GenericCard from '../../components/generic-card';
import GoalsRequirementsModal from '../../components/goals-requirements-modal';
import ModalToolBar from '../../components/modal-tool-bar';
import PersonalNotesModal from '../../components/personal-notes-modal';
import SessionModal from '../../components/session-modal';
import * as S from './styles';
import AttachmentModal from '../../components/attachment-modal';
import PertinentFactModal from '../../components/pertinent-fact-modal';
import PsychologicalAssessmentModal from '../../components/psychological-assessment-modal';

const MedicalRecord = () => {
  const [modalsState, setModalsState] = useState<ModalsStateT>({
    isSessionModalOpen: false,
    isPertinentFactModalOpen: false,
    isAttachmentModalOpen: false,
    isPsychologicalAssessmentModalOpen: false,
    isGoalsRequirementsModalOpen: false,
    isPersonalNotesModalOpen: false,
  });

  const content =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit blanditiis nobis, quas quibusdam porro commodi consequuntur libero velit necessitatibus optio distinctio corrupti totam, non fugiat quaerat magni enim sit numquam';
  return (
    <ModalContext.Provider value={{ setModalsState, modalsState }}>
      <S.Grid>
        <S.CardContainer>
          <DataPatientCard />
          <GenericCard
            title="Demandas e objetivos"
            content={content}
            modal="isGoalsRequirementsModalOpen"
            setModalsState={setModalsState}
          />
          <GenericCard
            title="Anotações pessoais"
            content={content}
            modal="isPersonalNotesModalOpen"
            setModalsState={setModalsState}
          />
        </S.CardContainer>
        <S.ModalToolBarContainer>
          <ModalToolBar setModalsState={setModalsState} />
        </S.ModalToolBarContainer>
        <S.ContentContainer>
          <SessionModal />
          <PertinentFactModal />
          <AttachmentModal />
          <PsychologicalAssessmentModal />
          <GoalsRequirementsModal />
          <PersonalNotesModal />
        </S.ContentContainer>
      </S.Grid>
    </ModalContext.Provider>
  );
};

export default MedicalRecord;
