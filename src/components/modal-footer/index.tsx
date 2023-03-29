import { Button, Typography } from '@mui/material';
import * as S from './styles';

const ModalFooter = () => {
  return (
    <S.ModalFooterContainer>
      <Typography
        color="secondary.dark"
        sx={{ fontStyle: 'italic', display: 'flex', alignItems: 'center' }}
      >
        *Campos Obrigatórios
      </Typography>

      <div>
        <Button size="large">
          <Typography color="secondary.dark" sx={{ textTransform: 'none' }}>
            Cancelar
          </Typography>
        </Button>
        <Button
          size="large"
          variant="contained"
          sx={{ borderRadius: 8, width: 147 }}
        >
          <Typography
            color="secondary.main"
            sx={{ textTransform: 'none', fontWeight: '700' }}
          >
            Criar
          </Typography>
        </Button>
      </div>
    </S.ModalFooterContainer>
  );
};

export default ModalFooter;
