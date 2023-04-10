import { useContext } from 'react';
import { ModalContext } from '../../contexts/ModalContext';
import Button from '@mui/material/Button';
import DeleteIcon from '../delete-icon';

const DeleteButton = () => {
  const { setModalsState } = useContext(ModalContext);

  const handleDeleteClick = () => {
    setModalsState((prevValue) => ({
      ...prevValue,
      isDeleteModalOpen: !prevValue.isDeleteModalOpen,
    }));
  };

  return (
    <Button variant="outlined" color="error" onClick={handleDeleteClick}>
      <DeleteIcon />
    </Button>
  );
};

export default DeleteButton;
