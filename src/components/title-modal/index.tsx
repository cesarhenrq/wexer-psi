import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '../close-icon';
import * as S from './styles';

type TitleModalProps = {
  title: string;
};

const TitleModal = ({ title }: TitleModalProps) => {
  return (
    <S.TitleModalContainer>
      <Typography
        id="session-modal-title"
        variant="h5"
        color="primary.main"
        sx={{ fontWeight: 'bold' }}
      >
        {title}
      </Typography>
      <IconButton>
        <CloseIcon />
      </IconButton>
    </S.TitleModalContainer>
  );
};

export default TitleModal;
