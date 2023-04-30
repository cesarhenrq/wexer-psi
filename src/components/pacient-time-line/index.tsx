import { useContext, useState } from 'react';
import { Typography, MenuItem, useTheme } from '@mui/material';
import TimeLineItem from '../time-line-item';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { FormControl } from '@mui/material';
import * as S from './styles';
import TopButton from '../top-button';
import { ServiceContext } from '../../contexts/ServiceContext';
import { OccurrencesContext } from '../../contexts/OccurrencesContext';
import useOccurrences from '../../hooks/use-occurrences';
import { getOccurrences } from '../../services/occurrence';

const PacientTimeLine = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const { service } = useContext(ServiceContext);

  const {
    sessionOccurrences,
    attachmentOccurrences,
    pertinentFactOccurrences,
    psychologicalAssessmentOccurrences,
  } = useOccurrences();

  const { occurrences, setOccurrences } = useContext(OccurrencesContext);

  const theme = useTheme();

  const handleChange = async (event: SelectChangeEvent) => {
    const { value } = event.target;
    if (value === 'session') {
      setOccurrences(sessionOccurrences);
    } else if (value === 'relevant_fact') {
      setOccurrences(pertinentFactOccurrences);
    } else if (value === 'attachment') {
      setOccurrences(attachmentOccurrences);
    } else if (value === 'assessment') {
      setOccurrences(psychologicalAssessmentOccurrences);
    } else {
      const occurrences = await getOccurrences(service._id);
      setOccurrences(occurrences);
    }
    setSelectedFilter(value);
  };
  return (
    <S.OutterBox theme={theme}>
      <S.InnerBox theme={theme}>
        <S.TimeLineDivider theme={theme} />
        <Typography color="secondary.dark">Filtrar por: </Typography>
        <FormControl variant="standard" sx={{ ml: 1 }}>
          <Select value={selectedFilter} onChange={handleChange}>
            <MenuItem value="all">
              <b>Todos</b>
            </MenuItem>
            <MenuItem value="session">
              <b>Sessão</b>
            </MenuItem>
            <MenuItem value="relevant_fact">
              <b>Fato Relevante</b>
            </MenuItem>
            <MenuItem value="attachment">
              <b>Anexo</b>
            </MenuItem>
            <MenuItem value="assessment">
              <b>Avialiação Psigológica</b>
            </MenuItem>
          </Select>
        </FormControl>
      </S.InnerBox>
      <>
        {occurrences.map((data, index) => (
          <TimeLineItem data={data} key={index} index={index} />
        ))}
      </>

      <TopButton />
    </S.OutterBox>
  );
};

export default PacientTimeLine;
