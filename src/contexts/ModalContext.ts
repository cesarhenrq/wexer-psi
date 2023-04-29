import { createContext, Dispatch, SetStateAction } from 'react';

type ModalsStateType = {
  isSessionModalOpen: boolean;
  isPertinentFactModalOpen: boolean;
  isAttachmentModalOpen: boolean;
  isPsychologicalAssessmentModalOpen: boolean;
  isPersonalNotesModalOpen: boolean;
  isDeleteModalOpen: boolean;
  isServiceModalOpen: boolean;
};

type ModalContextType = {
  modalsState: ModalsStateType;
  setModalsState: Dispatch<SetStateAction<ModalsStateType>>;
};

export const ModalContext = createContext<ModalContextType>({
  modalsState: {
    isSessionModalOpen: false,
    isPertinentFactModalOpen: false,
    isAttachmentModalOpen: false,
    isPsychologicalAssessmentModalOpen: false,
    isPersonalNotesModalOpen: false,
    isDeleteModalOpen: false,
    isServiceModalOpen: false,
  },
  setModalsState: () => null,
});
