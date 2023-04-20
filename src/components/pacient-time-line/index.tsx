import { useState } from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import TimeLineItem from '../time-line-item';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const PacientTimeLine = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedFilter(event.target.value);
  };
  return (
    <Box sx={{ marginLeft: 3 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
        <Divider sx={{ mr: 1, flex: 1 }} />
        <Typography sx={{ mr: 1, color: 'secondary.dark' }}>
          Filtrar por:{' '}
        </Typography>
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
      </Box>

      <TimeLineItem type="attachment" />
      <TimeLineItem type="psychological-assessment" />
    </Box>
  );
};

export default PacientTimeLine;
