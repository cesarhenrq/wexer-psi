import { createContext } from 'react';
import { Dispatch, SetStateAction } from 'react';

type ModalContextType = {
  modalsState: ModalsStateT;
  setModalsState: Dispatch<SetStateAction<ModalsStateT>>;
};

export const ModalContext = createContext<ModalContextType>({
  modalsState: {
    isSessionModalOpen: false,
    isPertinentFactModalOpen: false,
    isAttachmentModalOpen: false,
    isPsychologicalAssessmentModalOpen: false,
    isGoalsRequirementsModalOpen: false,
    isPersonalNotesModalOpen: false,
    isDeleteModalOpen: false,
  },
  setModalsState: () => null,
});
