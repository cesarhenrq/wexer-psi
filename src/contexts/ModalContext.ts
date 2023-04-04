import { createContext } from 'react';
import { Dispatch, SetStateAction } from 'react';

type ModalContextT = {
  modalsState: ModalsStateT;
  setModalsState: Dispatch<SetStateAction<ModalsStateT>>;
};

export const ModalContext = createContext<ModalContextT>({
  modalsState: {
    isSessionModalOpen: false,
    isPertinentFactModalOpen: false,
    isAttachmentModalOpen: false,
    isPsychologicalAssessmentModalOpen: false,
    isGoalsRequirementsModalOpen: false,
    isPersonalNotesModalOpen: false,
  },
  setModalsState: () => null,
});
