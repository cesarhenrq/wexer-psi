import { useContext, useState } from 'react';
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
import changeDate from '../../utils/functions/change-date';
import { deleteOccurrence, getOccurrences } from '../../services/occurrence';
import { ServiceContext } from '../../contexts/ServiceContext';
import { OccurrencesContext } from '../../contexts/OccurrencesContext';
import { EditingContext } from '../../contexts/EditingContext';
import { ModalContext } from '../../contexts/ModalContext';
import { OccurrenceContext } from '../../contexts/OccurrenceContext';

type TimeLineItemProps = {
  data:
    | SessionType
    | PertinentFactType
    | AttachmentType
    | PsychologicalAssessmentType;
  index: number;
};

const TimeLineItem = ({ data, index }: TimeLineItemProps) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const open = Boolean(anchorEl);

  const { service } = useContext(ServiceContext);

  const { setOccurrences } = useContext(OccurrencesContext);

  const { setOccurrence } = useContext(OccurrenceContext);

  const { setIsEditing } = useContext(EditingContext);

  const { setModalsState } = useContext(ModalContext);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = async () => {
    await deleteOccurrence(service._id, data._id);
    const occurrences = await getOccurrences(service._id);
    setOccurrences(occurrences);
  };

  const handleEdit = async (type: TimeLineItemType) => {
    await setIsEditing(true);
    await setOccurrence(data);
    const modals = {
      session: 'isSessionModalOpen',
      relevant_fact: 'isPertinentFactModalOpen',
      attachment: 'isAttachmentModalOpen',
      assessment: 'isPsychologicalAssessmentModalOpen',
    };
    setModalsState((prevState) => ({ ...prevState, [modals[type]]: true }));
  };

  const renderContent = () => {
    switch (data.type) {
      case 'session':
        return <SessionContent data={data} />;
      case 'attachment':
        return <AttachmentContent data={data} />;
      case 'relevant_fact':
        return <PertinentFactContent data={data} />;
      case 'assessment':
        return <PsychologicalAssessmentContent data={data} />;
      default:
        return '#00995D';
    }
  };

  const handleColor = () => {
    switch (data.type) {
      case 'session':
        return '#00995D';
      case 'attachment':
        return '#9D28AC';
      case 'relevant_fact':
        return '#2F80ED';
      case 'assessment':
        return '#EA1E61';
      default:
        return '#00995D';
    }
  };

  return (
    <S.TimeLineItemContainer>
      <VerticalDivider color={handleColor()} type={data.type} index={index} />
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
            {data.type === 'assessment' ? 'Entrevista Psicológica' : data.title}
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
              <MenuItem onClick={() => handleEdit(data.type)}>
                <MenuEditIcon />{' '}
                <Typography ml={1} color="info.main">
                  Editar
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleDelete}>
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
            {changeDate(data.createdOn)}
          </Typography>
          {renderContent()}
        </CardContent>
      </Card>
    </S.TimeLineItemContainer>
  );
};

export default TimeLineItem;
