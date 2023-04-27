import Typography from '@mui/material/Typography';

type SessionContentProps = {
  data: SessionType;
};

const SessionContent = ({ data }: SessionContentProps) => (
  <Typography variant="body1" mt={1}>
    {data.content}
  </Typography>
);

export default SessionContent;
