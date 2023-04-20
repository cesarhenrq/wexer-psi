import Typography from '@mui/material/Typography';

type PertinentFactContentProps = {
  content: string;
};

const PertinentFactContent = ({ content }: PertinentFactContentProps) => (
  <Typography variant="body1">{content}</Typography>
);

export default PertinentFactContent;
