import { useState, SyntheticEvent } from 'react';
import { Tabs, Tab, Box, InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Outlet, useNavigate } from 'react-router-dom';
import * as S from './styles';
import TabPanel from '../tab-panel';

const TabStyles = {
  mt: 1,
  borderBottom: 1,
  borderRight: 1,
  borderColor: 'divider',
  textTransform: 'none',
  width: '50%',
  fontSize: '1em',
};

const TabNav = () => {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  function handleClick(route: string) {
    navigate(`/${route}`);
  }

  const a11yProps = (index: number) => {
    return {
      id: `tab-${index}`,
      'aria-controls': `tabpanel-${index}`,
    };
  };

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <S.Container>
      <Box sx={{ width: '100%' }}>
        <Box
          sx={{
            borderRadius: 2,
            backgroundColor: 'secondary.main',
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            alignItems: 'center',
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="navigation tabs"
            sx={{ m: 1, width: '41.8%', fontSize: '1em' }}
          >
            <Tab
              label="Dados Cadastrais"
              {...a11yProps(0)}
              onClick={() => handleClick('dados-cadastrais')}
              sx={TabStyles}
            />

            <Tab
              label="Prontuário"
              {...a11yProps(1)}
              onClick={() => handleClick('prontuário')}
              sx={TabStyles}
            />
          </Tabs>
          <Box
            component="form"
            noValidate
            autoComplete="off"
            sx={{
              width: '32.1%',
              height: 48,
              display: 'flex',
              fontSize: '1em',
              alignItems: 'center',
            }}
          >
            <TextField
              placeholder="O que você está procurando?"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              sx={{ width: '100%', p: 1 }}
            />
          </Box>
        </Box>
        <TabPanel value={value} index={0}>
          <Outlet />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Outlet />
        </TabPanel>
      </Box>
    </S.Container>
  );
};

export default TabNav;
