import PersonalNotesModal from '../../components/personal-notes-modal';
import SessionModal from '../../components/session-modal';
import AttachmentModal from '../../components/attachment-modal';
import PertinentFactModal from '../../components/pertinent-fact-modal';
import PsychologicalAssessmentModal from '../../components/psychological-assessment-modal';
import DeleteModal from '../delete-modal';
import ServiceModal from '../service-modal';

const Modals = () => (
  <>
    <SessionModal />
    <PertinentFactModal />
    <AttachmentModal />
    <PsychologicalAssessmentModal />
    <PersonalNotesModal />
    <DeleteModal />
    <ServiceModal />
  </>
);

export default Modals;
