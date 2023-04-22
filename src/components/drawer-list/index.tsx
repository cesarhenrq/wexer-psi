import { useState } from 'react';
import {
  Typography,
  List,
  ListItemButton,
  ListItemText,
  useTheme,
} from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ClipboardIcon from '../clipboard-icon';
import ConfigureIcon from '../configure-icon';
import PeopleIcon from '../people-icon';
import * as S from './styles';

type CollapsesStateType = {
  isModelsCollapseOpen: boolean;
  isRegistrationsCollapseOpen: boolean;
};

const DrawerList = () => {
  const [collapsesState, setCollapsesState] = useState<CollapsesStateType>({
    isModelsCollapseOpen: false,
    isRegistrationsCollapseOpen: false,
  });

  const theme = useTheme();

  const handleClick = (key: keyof CollapsesStateType) => {
    setCollapsesState((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  return (
    <S.DrawerBox theme={theme}>
      <List>
        <S.DrawerListItemButton theme={theme}>
          <S.DrawerListItemIcon theme={theme}>
            <PeopleIcon />
          </S.DrawerListItemIcon>
          <ListItemText>
            <Typography color="secondary.main" variant="caption">
              Meus pacientes
            </Typography>
          </ListItemText>
        </S.DrawerListItemButton>
        {collapsesState.isModelsCollapseOpen ? (
          <S.DrawerCollapse
            theme={theme}
            in={collapsesState.isModelsCollapseOpen}
          >
            <List>
              <ListItemButton
                onClick={() => handleClick('isModelsCollapseOpen')}
              >
                <S.DrawerListItemIcon theme={theme}>
                  <ClipboardIcon color="white" width="24" height="24" />
                </S.DrawerListItemIcon>
                <ListItemText>
                  <Typography color="secondary.main" variant="caption">
                    Modelos
                  </Typography>
                </ListItemText>
                <ArrowBackIosNewIcon color="secondary" />
              </ListItemButton>
              <S.DrawerListItemButton theme={theme} isCollapsed={true}>
                <ListItemText>
                  <Typography color="secondary.main" variant="caption">
                    Entrevistas
                  </Typography>
                </ListItemText>
              </S.DrawerListItemButton>
              <S.DrawerListItemButton theme={theme} isCollapsed={true}>
                <ListItemText>
                  <Typography color="secondary.main" variant="caption">
                    Roteiro de testes
                  </Typography>
                </ListItemText>
              </S.DrawerListItemButton>
              <S.DrawerListItemButton theme={theme} isCollapsed={true}>
                <ListItemText>
                  <Typography color="secondary.main" variant="caption">
                    Documentos
                  </Typography>
                </ListItemText>
              </S.DrawerListItemButton>
            </List>
          </S.DrawerCollapse>
        ) : (
          <S.DrawerListItemButton
            onClick={() => handleClick('isModelsCollapseOpen')}
            theme={theme}
          >
            <S.DrawerListItemIcon theme={theme}>
              <ClipboardIcon color="white" width="24" height="24" />
            </S.DrawerListItemIcon>

            <ListItemText>
              <Typography color="secondary.main" variant="caption">
                Modelos
              </Typography>
            </ListItemText>
            <ArrowBackIosNewIcon color="secondary" />
          </S.DrawerListItemButton>
        )}

        {collapsesState.isRegistrationsCollapseOpen ? (
          <S.DrawerCollapse
            theme={theme}
            in={collapsesState.isRegistrationsCollapseOpen}
          >
            <List>
              <ListItemButton
                onClick={() => handleClick('isRegistrationsCollapseOpen')}
              >
                <S.DrawerListItemIcon theme={theme}>
                  <AddCircleIcon color="secondary" />
                </S.DrawerListItemIcon>
                <ListItemText>
                  <Typography color="secondary.main" variant="caption">
                    Cadastros
                  </Typography>
                </ListItemText>
                <ArrowBackIosNewIcon color="secondary" />
              </ListItemButton>
              <S.DrawerListItemButton theme={theme} isCollapsed={true}>
                <ListItemText>
                  <Typography color="secondary.main" variant="caption">
                    Perguntas
                  </Typography>
                </ListItemText>
              </S.DrawerListItemButton>
              <S.DrawerListItemButton theme={theme} isCollapsed={true}>
                <ListItemText>
                  <Typography color="secondary.main" variant="caption">
                    Testes
                  </Typography>
                </ListItemText>
              </S.DrawerListItemButton>
              <S.DrawerListItemButton theme={theme} isCollapsed={true}>
                <ListItemText>
                  <Typography color="secondary.main" variant="caption">
                    Tipos de Avaliações
                  </Typography>
                </ListItemText>
              </S.DrawerListItemButton>
            </List>
          </S.DrawerCollapse>
        ) : (
          <S.DrawerListItemButton
            theme={theme}
            onClick={() => handleClick('isRegistrationsCollapseOpen')}
          >
            <S.DrawerListItemIcon theme={theme}>
              <AddCircleIcon color="secondary" />
            </S.DrawerListItemIcon>
            <ListItemText>
              <Typography color="secondary.main" variant="caption">
                Cadastros
              </Typography>
            </ListItemText>
            <ArrowBackIosNewIcon color="secondary" />
          </S.DrawerListItemButton>
        )}

        <S.DrawerListItemButton theme={theme}>
          <S.DrawerListItemIcon theme={theme}>
            <ConfigureIcon />
          </S.DrawerListItemIcon>
          <ListItemText>
            <Typography color="secondary.main" variant="caption">
              Preferências
            </Typography>
          </ListItemText>
        </S.DrawerListItemButton>
      </List>
    </S.DrawerBox>
  );
};

export default DrawerList;
