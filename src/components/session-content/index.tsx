import Typography from '@mui/material/Typography';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { OccurrenceContext } from '../../contexts/OccurrenceContext';
import { OccurrencesContext } from '../../contexts/OccurrencesContext';

type SessionContentProps = {
  data: SessionType;
};

const SessionContent = ({ data }: SessionContentProps) => {
  const { setOccurrence } = useContext(OccurrenceContext);

  const { occurrences } = useContext(OccurrencesContext);

  const handleOccurrence = () => {
    const occurrence = occurrences.find(
      (occurrence) => occurrence._id === data._id
    );

    occurrence && setOccurrence(occurrence);
  };
  return (
    <Typography variant="body1" mt={1} sx={{ textAlign: 'justify' }}>
      {data.content && data.content.length > 300 ? (
        <>
          {`${data.content.slice(0, 300)}...`}
          <Link to="/sessão" onClick={handleOccurrence}>
            Ver mais
          </Link>
        </>
      ) : (
        data.content
      )}
    </Typography>
  );
};

export default SessionContent;
