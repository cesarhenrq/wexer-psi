import { Dispatch, SetStateAction } from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import EditIcon from '../edit-icon';
import * as S from './styles';

type GenericCardProps = {
  title: string;
  content: string;
  modal: ModalsStateKeys;
  setModalsState: Dispatch<SetStateAction<ModalsStateT>>;
};

const GenericCard = ({
  title,
  content,
  modal,
  setModalsState,
}: GenericCardProps) => {
  const handleClick = <Keys extends ModalsStateKeys>(key: Keys) => {
    setModalsState((prevValue) => ({
      ...prevValue,
      [key]: true,
    }));
  };
  return (
    <Card>
      <CardContent>
        <S.Title>
          <Typography variant="h6">{title}</Typography>
          <Button
            variant="outlined"
            sx={{ width: 32, height: 24, padding: 0 }}
            onClick={() => handleClick(modal)}
          >
            <EditIcon />
          </Button>
        </S.Title>
        <div>{content}</div>
      </CardContent>
    </Card>
  );
};

export default GenericCard;
