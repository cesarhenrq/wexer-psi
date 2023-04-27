import Typography from '@mui/material/Typography';

type PertinentFactContentProps = {
  data: PertinentFactType;
};

const PertinentFactContent = ({ data }: PertinentFactContentProps) => (
  <Typography variant="body1" mt={1}>
    {data.content}
  </Typography>
);

export default PertinentFactContent;
