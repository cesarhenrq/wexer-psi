import Button from '@mui/material/Button';
import DeleteIcon from '../delete-icon';

const DeleteButton = () => (
  <Button
    variant="outlined"
    color="error"
    sx={{ width: 32, height: 24, padding: 0 }}
  >
    <DeleteIcon />
  </Button>
);

export default DeleteButton;
