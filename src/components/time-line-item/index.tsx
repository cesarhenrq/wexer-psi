import { useState } from 'react';
import { Card, CardContent, Menu, MenuItem, Typography } from '@mui/material';
import { MoreHoriz as MoreHorizIcon } from '@mui/icons-material';
import SessionContent from '../session-content';
import VerticalDivider from '../vertical-divider';
import * as S from './styles';
import PertinentFactContent from '../pertinent-fact-content';
import AttachmentContent from '../attachment-content';
import MenuEditIcon from '../menu-edit-icon';
import MenuDeleteIcon from '../menu-delete-icon';
import MenuExportIcon from '../menu-export-icon';
import PsychologicalAssessmentContent from '../psychological-assessment-content';

type TimeLineItemType =
  | 'session'
  | 'attachment'
  | 'pertinent-fact'
  | 'psychological-assessment';

type TimeLineItemProps = {
  type: TimeLineItemType;
};

const TimeLineItem = ({ type }: TimeLineItemProps) => {
  const handleColor = () => {
    switch (type) {
      case 'session':
        return '#00995D';
      case 'attachment':
        return '#9D28AC';
      case 'pertinent-fact':
        return '#2F80ED';
      case 'psychological-assessment':
        return '#EA1E61';
      default:
        return null;
    }
  };

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const renderContent = () => {
    switch (type) {
      case 'session':
        return <SessionContent content="it works" />;
      case 'attachment':
        return <AttachmentContent text="text" numberOfAttachments={2} />;
      case 'pertinent-fact':
        return <PertinentFactContent content="it works 3!" />;
      case 'psychological-assessment':
        return <PsychologicalAssessmentContent />;
      default:
        return null;
    }
  };

  return (
    <S.TimeLineItemContainer>
      <VerticalDivider color={handleColor()} type={type} />
      <Card sx={{ borderLeft: `4px solid ${handleColor()}`, pt: 2 }}>
        <CardContent>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 'bold',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            Sessão 02
            <S.MoreButton onClick={handleClick}>
              <MoreHorizIcon />
            </S.MoreButton>
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              <MenuItem onClick={handleClose}>
                <MenuEditIcon />{' '}
                <Typography ml={1} color="info.main">
                  Editar
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <MenuDeleteIcon />{' '}
                <Typography ml={1} color="error.main">
                  Excluir
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <MenuExportIcon />{' '}
                <Typography ml={1} color="primary.main">
                  Exportar
                </Typography>
              </MenuItem>
            </Menu>
          </Typography>
          <Typography variant="caption" color="secondary.dark">
            22 de setembro de 2022
          </Typography>
          {renderContent()}
        </CardContent>
      </Card>
    </S.TimeLineItemContainer>
  );
};

export default TimeLineItem;
