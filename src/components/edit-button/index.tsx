import Button from '@mui/material/Button';
import EditIcon from '../edit-icon';

const EditButton = () => (
  <Button variant="outlined" sx={{ width: 32, height: 24, padding: 0 }}>
    <EditIcon />
  </Button>
);

export default EditButton;
