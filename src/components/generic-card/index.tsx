import { Card, CardContent, Typography } from '@mui/material';
import EditButton from '../edit-button';
import * as S from './styles';

type GenericCardProps = {
  title: string;
  content: string;
  modal: ModalsStateKeys;
};

const GenericCard = ({ title, content, modal }: GenericCardProps) => {
  return (
    <Card sx={{ width: 340 }}>
      <CardContent>
        <S.Title>
          <Typography variant="h6">{title}</Typography>
          <EditButton modal={modal} />
        </S.Title>
        <div>{content}</div>
      </CardContent>
    </Card>
  );
};

export default GenericCard;
