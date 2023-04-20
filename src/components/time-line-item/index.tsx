import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SessionContent from '../session-content';
import VerticalDivider from '../vertical-divider';
import * as S from './styles';
import PertinentFactContent from '../pertinent-fact-content';
import AttachmentContent from '../attachment-content';

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
      ? (color = '#9D28AC')
      : type === 'pertinent-fact'
      ? (color = '#2F80ED')
      : (color = '#EA1E61');
    return color;
  };
  return (
    <S.TimeLineItemContainer>
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
          <Typography variant="caption" color="secondary.dark">
            22 de setembro de 2022
          </Typography>
          {type === 'session' ? (
            <SessionContent content="it works" />
          ) : type === 'attachment' ? (
            <AttachmentContent text="text" numberOfAttachments={2} />
          ) : type === 'pertinent-fact' ? (
            <PertinentFactContent content="it works 3!" />
          ) : (
            <div> it works 4!</div>
          )}
        </CardContent>
      </Card>
    </S.TimeLineItemContainer>
  );
};

export default TimeLineItem;
