import ShowIcon from '../show-icon';
import { Button } from './styles';
import { useTheme } from '@mui/material';

const ShowButton = () => {
  const theme = useTheme();
  return (
    <Button theme={theme}>
      <ShowIcon />
    </Button>
  );
};

export default ShowButton;
