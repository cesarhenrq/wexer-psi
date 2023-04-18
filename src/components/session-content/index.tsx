import Typography from '@mui/material/Typography';

type SessionContentProps = {
  content: string;
};

const SessionContent = ({ content }: SessionContentProps) => (
  <Typography>{content}</Typography>
);

export default SessionContent;
