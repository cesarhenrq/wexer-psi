import { useContext } from 'react';
import { ModalContext } from '../../contexts/ModalContext';
import { Button } from './styles';
import EditIcon from '../edit-icon';
import { useTheme } from '@mui/material';
import { EditingContext } from '../../contexts/EditingContext';

type EditButtonProps = {
  modal: ModalsStateKeys;
  isDisabled: boolean;
  willEdit?: boolean;
};

const EditButton = ({ modal, isDisabled, willEdit }: EditButtonProps) => {
  const { setModalsState } = useContext(ModalContext);

  const { setIsEditing } = useContext(EditingContext);

  const theme = useTheme();

  const handleClick = <Keys extends ModalsStateKeys>(key: Keys) => {
    setModalsState((prevValue) => ({
      ...prevValue,
      [key]: true,
    }));

    willEdit && setIsEditing(true);
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
