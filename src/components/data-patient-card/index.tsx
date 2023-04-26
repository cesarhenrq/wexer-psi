import DataPatient from '../data-patient';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import PersonIcon from '../person-icon';
import CalendarIcon from '../calendar-icon';
import SuitcaseIcon from '../suitcase-icon';
import BookMarkIcon from '../bookmark-icon';
import * as S from './styles';
import usePatientData from '../../hooks/use-patient-data';
import formatDate from '../../utils/functions/format-date';

const DataPatientCard = () => {
  const { name, birthdate, profession, schooling } = usePatientData();

  return (
    <S.CardContainer>
      <CardContent>
        <S.Title>
          <Typography variant="h6">Identificação do Paciente</Typography>
        </S.Title>
        <DataPatient label="Paciente" data={name}>
          <PersonIcon />
        </DataPatient>
        <DataPatient label="Nascimento" data={formatDate(birthdate)}>
          <CalendarIcon />
        </DataPatient>
        <DataPatient label="Profissão" data={profession}>
          <SuitcaseIcon />
        </DataPatient>
        <DataPatient label="Escolaridade" data={schooling}>
          <BookMarkIcon />
        </DataPatient>
      </CardContent>
    </S.CardContainer>
  );
};

export default DataPatientCard;
