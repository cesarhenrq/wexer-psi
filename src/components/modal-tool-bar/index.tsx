import { Box, Divider, Typography } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { ButtonContainer } from './styles';
import EditButton from '../edit-button';
import DeleteButton from '../delete-button';

const ModalToolBar = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'secondary.main',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
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
            sx={{ width: 495 }}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
          >
            <MenuItem value="">None</MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
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
      <Box>Teste</Box>
    </Box>
  );
};

export default ModalToolBar;

/*meanwhile it's without backend integration, these props will be removed:  
value={age}
onChange={handleChange}*/
