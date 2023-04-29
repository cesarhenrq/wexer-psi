import { useContext } from 'react';
import { ModalContext } from '../../contexts/ModalContext';
import { Button } from './styles';
import EditIcon from '../edit-icon';
import { useTheme } from '@mui/material';

type EditButtonProps = {
  modal: ModalsStateKeys;
  isDisabled: boolean;
};

const EditButton = ({ modal, isDisabled }: EditButtonProps) => {
  const { setModalsState } = useContext(ModalContext);

  const theme = useTheme();

  const handleClick = <Keys extends ModalsStateKeys>(key: Keys) => {
    setModalsState((prevValue) => ({
      ...prevValue,
      [key]: true,
    }));
  };

  return (
    <Button
      onClick={() => handleClick(modal)}
      theme={theme}
      disabled={isDisabled}
    >
      <EditIcon />
    </Button>
  );
};

export default EditButton;
