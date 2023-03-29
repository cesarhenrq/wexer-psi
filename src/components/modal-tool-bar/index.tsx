import { Box, Divider, Typography } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { ButtonContainer } from './styles';
import EditButton from '../edit-button';
import DeleteButton from '../delete-button';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import SessionIcon from '../session-icon';
import PinIcon from '../pin-icon';
import ClipIcon from '../clip-icon';
import ClipboardIcon from '../clipboard-icon';

const ModalToolBar = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'secondary.main',
        marginLeft: 3,
        padding: 2,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <FormControl
          sx={{
            m: 1,
            minWidth: 120,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Typography sx={{ fontWeight: 'bold', marginRight: 2 }}>
            Serviço:
          </Typography>
          <Select
            sx={{ width: 300 }}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
          >
            <MenuItem value="">None</MenuItem>
          </Select>
        </FormControl>
        <Typography>
          <b>Data inicial:</b> 18/10/2022
        </Typography>

        <ButtonContainer>
          <EditButton />
          <DeleteButton />
        </ButtonContainer>
      </Box>
      <Divider />
      <Box>
        <Stack
          direction="row"
          spacing={2}
          sx={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <Button
            variant="text"
            startIcon={<SessionIcon />}
            sx={{ textTransform: 'none' }}
          >
            <Typography sx={{ fontWeight: 'bold' }} color="black">
              Sessão
            </Typography>
          </Button>
          <Button
            variant="text"
            startIcon={<PinIcon />}
            sx={{ textTransform: 'none' }}
          >
            <Typography sx={{ fontWeight: 'bold' }} color="black">
              Fato importante
            </Typography>
          </Button>
          <Button
            variant="text"
            startIcon={<ClipIcon />}
            sx={{ textTransform: 'none' }}
          >
            <Typography sx={{ fontWeight: 'bold' }} color="black">
              Anexo
            </Typography>
          </Button>
          <Button
            variant="text"
            startIcon={
              <ClipboardIcon color="#EA1E61" width="24" height="29.33" />
            }
            sx={{ textTransform: 'none' }}
          >
            <Typography sx={{ fontWeight: 'bold' }} color="black">
              Avaliação Psicológica
            </Typography>
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default ModalToolBar;

/*meanwhile it's without backend integration, these props will be removed:  
value={age}
onChange={handleChange}*/
