import { useState } from 'react';
import { Typography, MenuItem, useTheme } from '@mui/material';
import TimeLineItem from '../time-line-item';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import * as S from './styles';
import TopButton from '../top-button';

const PacientTimeLine = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const theme = useTheme();

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedFilter(event.target.value);
  };
  return (
    <S.OutterBox theme={theme}>
      <S.InnerBox theme={theme}>
        <S.TimeLineDivider theme={theme} />
        <Typography color="secondary.dark">Filtrar por: </Typography>
        <Select value={selectedFilter} onChange={handleChange}>
          <MenuItem value="all">
            <b>Todos</b>
          </MenuItem>
          <MenuItem value="session">
            <b>Sessão</b>
          </MenuItem>
          <MenuItem value="relevant-fact">
            <b>Fato Relevante</b>
          </MenuItem>
          <MenuItem value="attachment">
            <b>Anexo</b>
          </MenuItem>
          <MenuItem value="psychological-assesment">
            <b>Avialiação Psigológica</b>
          </MenuItem>
        </Select>
      </S.InnerBox>

      <TimeLineItem type="attachment" />
      <TimeLineItem type="psychological-assessment" />
      <TopButton />
    </S.OutterBox>
  );
};

export default PacientTimeLine;
