import { Card, CardContent, Typography } from '@mui/material';
import EditButton from '../edit-button';
import removeHTMLTags from '../../utils/functions/remove-html-tags';
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
          <EditButton modal={modal} isDisabled={false} />
        </S.Title>
        <Typography variant="body1"> {removeHTMLTags(content)}</Typography>
      </CardContent>
    </Card>
  );
};

export default GenericCard;
