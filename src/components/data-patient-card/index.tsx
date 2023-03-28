import DataPatient from '../data-patient';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import PersonIcon from '../person-icon';
import CalendarIcon from '../calendar-icon';
import SuitcaseIcon from '../suitcase-icon';
import BookMarkIcon from '../bookmark-icon';
import * as S from './styles';

const DataPatientCard = () => {
  return (
    <Card sx={{ width: 340 }}>
      <CardContent>
        <S.Title>
          <Typography variant="h6">Identificação do Paciente</Typography>
        </S.Title>
        <DataPatient label="Paciente" data="Ana Ester Resende">
          <PersonIcon />
        </DataPatient>
        <DataPatient label="Nascimento" data="31/03/1998">
          <CalendarIcon />
        </DataPatient>
        <DataPatient label="Profissão" data="Designer">
          <SuitcaseIcon />
        </DataPatient>
        <DataPatient label="Escolaridade" data="Superior incompleto">
          <BookMarkIcon />
        </DataPatient>
      </CardContent>
    </Card>
  );
};

export default DataPatientCard;
