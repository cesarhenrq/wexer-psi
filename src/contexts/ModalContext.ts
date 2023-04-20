import { createContext, Dispatch, SetStateAction } from 'react';

type ModalType = {
  isSessionModalOpen: boolean;
  isPertinentFactModalOpen: boolean;
  isAttachmentModalOpen: boolean;
  isPsychologicalAssessmentModalOpen: boolean;
  isGoalsRequirementsModalOpen: boolean;
  isPersonalNotesModalOpen: boolean;
  isDeleteModalOpen: boolean;
};

type ModalContextType = {
  modalsState: ModalType;
  setModalsState: Dispatch<SetStateAction<ModalType>>;
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
