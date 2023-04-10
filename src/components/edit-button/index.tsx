import { useContext } from 'react';
import { ModalContext } from '../../contexts/ModalContext';
import Button from '@mui/material/Button';
import EditIcon from '../edit-icon';

type EditButtonProps = {
  modal: ModalsStateKeys;
};

const EditButton = ({ modal }: EditButtonProps) => {
  const { setModalsState } = useContext(ModalContext);

  const handleClick = <Keys extends ModalsStateKeys>(key: Keys) => {
    setModalsState((prevValue) => ({
      ...prevValue,
      [key]: true,
    }));
  };

  return (
    <Button
      variant="outlined"
      sx={{ width: 32, height: 24, padding: 0 }}
      onClick={() => handleClick(modal)}
    >
      <EditIcon />
    </Button>
  );
};

export default EditButton;
