import { useContext } from 'react';
import { ModalContext } from '../../contexts/ModalContext';
import { Button } from './styles';
import { useTheme } from '@mui/material';
import DeleteIcon from '../delete-icon';

type DeleteButtonProps = {
  isDisabled: boolean;
};

const DeleteButton = ({ isDisabled }: DeleteButtonProps) => {
  const { setModalsState } = useContext(ModalContext);

  const theme = useTheme();

  const handleDeleteClick = () => {
    setModalsState((prevValue) => ({
      ...prevValue,
      isDeleteModalOpen: !prevValue.isDeleteModalOpen,
    }));
  };

  return (
    <Button onClick={handleDeleteClick} theme={theme} disabled={isDisabled}>
      <DeleteIcon />
    </Button>
  );
};

export default DeleteButton;
