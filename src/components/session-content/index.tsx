import Typography from '@mui/material/Typography';

type SessionContentProps = {
  content: string;
};

const SessionContent = ({ content }: SessionContentProps) => (
  <Typography variant="body1">{content}</Typography>
);

export default SessionContent;
