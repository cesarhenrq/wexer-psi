import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SessionContent from '../session-content';

type TimeLineItemProps = {
  type:
    | 'session'
    | 'attachment'
    | 'pertinent-fact'
    | 'psychological-assessment';
};

const TimeLineItem = ({ type }: TimeLineItemProps) => {
  return (
    <Card sx={{ borderLeft: '4px solid black', pt: 2 }}>
      <CardContent>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 'bold',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          Sessão 02
          <MoreHorizIcon />
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="secondary.dark">
          22 de setembro de 2022
        </Typography>
        {type === 'session' ? <SessionContent content="it works" /> : null}
      </CardContent>
    </Card>
  );
};

export default TimeLineItem;
