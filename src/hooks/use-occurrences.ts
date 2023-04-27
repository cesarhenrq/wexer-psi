import { useContext, useEffect, useState } from 'react';
import { OccurrencesContext } from '../contexts/OccurrencesContext';
import { getOccurrences } from '../services/occurrence';
import { ServiceContext } from '../contexts/ServiceContext';

const useOccurrences = () => {
  const { setOccurrences } = useContext(OccurrencesContext);

  const { service } = useContext(ServiceContext);

  const [sessionOccurrences, setSessionOccurrences] = useState<SessionType[]>(
    []
  );

  const [pertinentFactOccurrences, setPertinentFactOccurrences] = useState<
    PertinentFactType[]
  >([]);

  const [attachmentOccurrences, setAttachmentOccurrences] = useState<
    AttachmentType[]
  >([]);

  const [
    psychologicalAssessmentOccurrences,
    setPsychologicalAssessmentOccurrences,
  ] = useState<PsychologicalAssessmentType[]>([]);

  useEffect(() => {
    const fetchServices = async () => {
      const occurrences = await getOccurrences(service._id);
      setOccurrences(occurrences);

      const sessionOccurrences = occurrences.filter(
        (occurrence) => occurrence.type === 'session'
      );
      setSessionOccurrences(sessionOccurrences);

      const pertinentFactOccurrences = occurrences.filter(
        (occurrence) => occurrence.type === 'relevant_fact'
      );
      setPertinentFactOccurrences(pertinentFactOccurrences);

      const attachmentOccurrences = occurrences.filter(
        (occurrence) => occurrence.type === 'attachment'
      );
      setAttachmentOccurrences(attachmentOccurrences);

      const psychologicalAssessmentOccurrences = occurrences.filter(
        (occurrence) => occurrence.type === 'assessment'
      );
      setPsychologicalAssessmentOccurrences(psychologicalAssessmentOccurrences);
    };

    fetchServices();
  }, []);

  return {
    sessionOccurrences,
    pertinentFactOccurrences,
    attachmentOccurrences,
    psychologicalAssessmentOccurrences,
  };
};

export default useOccurrences;
