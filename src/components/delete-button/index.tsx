import { useContext } from 'react';
import { ModalContext } from '../../contexts/ModalContext';
import { Button } from './styles';
import { useTheme } from '@mui/material';
import DeleteIcon from '../delete-icon';

type DeleteButtonProps = {
  isDisabled: boolean;
  handleDelete?: () => void;
};

const DeleteButton = ({ isDisabled, handleDelete }: DeleteButtonProps) => {
  const { setModalsState } = useContext(ModalContext);

  const theme = useTheme();

  const handleOpen = () => {
    setModalsState((prevValue) => ({
      ...prevValue,
      isDeleteModalOpen: !prevValue.isDeleteModalOpen,
    }));
  };

  const handleClick = () => {
    handleDelete ? handleDelete() : handleOpen();
  };

  return (
    <Button onClick={handleClick} theme={theme} disabled={isDisabled}>
      <DeleteIcon />
    </Button>
  );
};

export default DeleteButton;
