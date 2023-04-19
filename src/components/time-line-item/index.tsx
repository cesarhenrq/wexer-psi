import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SessionContent from '../session-content';
import VerticalDivider from '../vertical-divider';

type TimeLineItemProps = {
  type:
    | 'session'
    | 'attachment'
    | 'pertinent-fact'
    | 'psychological-assessment';
};

const TimeLineItem = ({ type }: TimeLineItemProps) => {
  const handleColor = () => {
    let color = '';
    type === 'session'
      ? (color = '#00995D')
      : type === 'attachment'
      ? (color = '#2F80ED')
      : type === 'pertinent-fact'
      ? (color = '#9D28AC')
      : (color = '#EA1E61');
    return color;
  };
  return (
    <>
      <VerticalDivider color={handleColor()} type={type} />
      <Card sx={{ borderLeft: `4px solid ${handleColor()}`, pt: 2 }}>
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
    </>
  );
};

export default TimeLineItem;
