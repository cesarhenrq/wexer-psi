import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import EditButton from '../edit-button';
import * as S from './styles';

type GenericCardProps = {
  title: string;
  content: string;
};

const GenericCard = ({ title, content }: GenericCardProps) => {
  return (
    <Card>
      <CardContent>
        <S.Title>
          <Typography variant="h6">{title}</Typography>
          <EditButton />
        </S.Title>
        <div>{content}</div>
      </CardContent>
    </Card>
  );
};

export default GenericCard;
