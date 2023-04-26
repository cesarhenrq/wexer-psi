import { useState } from 'react';

const useModal = () => {
  const [modalsState, setModalsState] = useState({
    isSessionModalOpen: false,
    isPertinentFactModalOpen: false,
    isAttachmentModalOpen: false,
    isPsychologicalAssessmentModalOpen: false,
    isGoalsRequirementsModalOpen: false,
    isPersonalNotesModalOpen: false,
    isDeleteModalOpen: false,
    isServiceModalOpen: false,
  });

  return { modalsState, setModalsState };
};

export default useModal;
