import { useState } from 'react';
import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
} from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ClipboardIcon from '../clipboard-icon';
import ConfigureIcon from '../configure-icon';
import PeopleIcon from '../people-icon';

type CollapsesStateType = {
  isModelsCollapseOpen: boolean;
  isRegistrationsCollapseOpen: boolean;
};

const DrawerList = () => {
  const [collapsesState, setCollapsesState] = useState<CollapsesStateType>({
    isModelsCollapseOpen: false,
    isRegistrationsCollapseOpen: false,
  });

  const handleClick = (key: keyof CollapsesStateType) => {
    setCollapsesState((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  return (
    <Box
      sx={{ backgroundColor: 'primary.main', height: '100%', width: '263px' }}
    >
      <List>
        <ListItemButton sx={{ mb: 1 }}>
          <ListItemIcon sx={{ mr: -2 }}>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText
            primary="Meus pacientes"
            sx={{ color: 'secondary.main' }}
          />
        </ListItemButton>
        {collapsesState.isModelsCollapseOpen ? (
          <Collapse
            in={collapsesState.isModelsCollapseOpen}
            sx={{ bgcolor: 'primary.dark', mb: 1 }}
          >
            <List>
              <ListItemButton
                onClick={() => handleClick('isModelsCollapseOpen')}
              >
                <ListItemIcon sx={{ mr: -2 }}>
                  <ClipboardIcon color="white" width="24" height="24" />
                </ListItemIcon>
                <ListItemText
                  primary="Modelos"
                  sx={{ color: 'secondary.main' }}
                />
                <ArrowBackIosNewIcon color="secondary" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 7 }}>
                <ListItemText
                  primary="Entrevistas"
                  sx={{ color: 'secondary.main' }}
                />
              </ListItemButton>
              <ListItemButton sx={{ pl: 7 }}>
                <ListItemText
                  primary="Roteiro de testes"
                  sx={{ color: 'secondary.main' }}
                />
              </ListItemButton>
              <ListItemButton sx={{ pl: 7 }}>
                <ListItemText
                  primary="Documentos"
                  sx={{ color: 'secondary.main' }}
                />
              </ListItemButton>
            </List>
          </Collapse>
        ) : (
          <ListItemButton
            onClick={() => handleClick('isModelsCollapseOpen')}
            sx={{ mb: 1 }}
          >
            <ListItemIcon sx={{ mr: -2 }}>
              <ClipboardIcon color="white" width="24" height="24" />
            </ListItemIcon>
            <ListItemText primary="Modelos" sx={{ color: 'secondary.main' }} />
            <ArrowBackIosNewIcon color="secondary" />
          </ListItemButton>
        )}

        {collapsesState.isRegistrationsCollapseOpen ? (
          <Collapse
            in={collapsesState.isRegistrationsCollapseOpen}
            sx={{ bgcolor: 'primary.dark', mb: 1 }}
          >
            <List>
              <ListItemButton
                onClick={() => handleClick('isRegistrationsCollapseOpen')}
              >
                <ListItemIcon sx={{ mr: -2 }}>
                  <AddCircleIcon color="secondary" />
                </ListItemIcon>
                <ListItemText
                  primary="Cadastros"
                  sx={{ color: 'secondary.main' }}
                />
                <ArrowBackIosNewIcon color="secondary" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 7 }}>
                <ListItemText
                  primary="Perguntas"
                  sx={{ color: 'secondary.main' }}
                />
              </ListItemButton>
              <ListItemButton sx={{ pl: 7 }}>
                <ListItemText
                  primary="Testes"
                  sx={{ color: 'secondary.main' }}
                />
              </ListItemButton>
              <ListItemButton sx={{ pl: 7 }}>
                <ListItemText
                  primary="Tipos de Avaliações"
                  sx={{ color: 'secondary.main' }}
                />
              </ListItemButton>
            </List>
          </Collapse>
        ) : (
          <ListItemButton
            onClick={() => handleClick('isRegistrationsCollapseOpen')}
            sx={{ mb: 1 }}
          >
            <ListItemIcon sx={{ mr: -2 }}>
              <AddCircleIcon color="secondary" />
            </ListItemIcon>
            <ListItemText
              primary="Cadastros"
              sx={{ color: 'secondary.main' }}
            />
            <ArrowBackIosNewIcon color="secondary" />
          </ListItemButton>
        )}

        <ListItemButton sx={{ mb: 1 }}>
          <ListItemIcon sx={{ mr: -2 }}>
            <ConfigureIcon />
          </ListItemIcon>
          <ListItemText
            primary="Preferências"
            sx={{ color: 'secondary.main' }}
          />
        </ListItemButton>
      </List>
    </Box>
  );
};

export default DrawerList;
