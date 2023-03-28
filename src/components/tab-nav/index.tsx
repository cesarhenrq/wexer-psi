import { useState, SyntheticEvent } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabPanel from '../tab-panel';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import SearchIcon from '@mui/icons-material/Search';
import { Outlet, useNavigate, Navigate } from 'react-router-dom';
import * as S from './styles';

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
            borderRadius: 1,
            backgroundColor: 'secondary.main',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="navigation tabs"
          >
            <Tab
              label="Dados Cadastrais"
              {...a11yProps(0)}
              onClick={() => handleClick('dados-cadastrais')}
              sx={{
                borderBottom: 1,
                borderRight: 1,
                borderColor: 'divider',
                textTransform: 'none',
                width: 251,
              }}
            />

            <Tab
              label="Prontuário"
              {...a11yProps(1)}
              onClick={() => handleClick('prontuário')}
              sx={{
                borderBottom: 1,
                borderRight: 1,
                borderColor: 'divider',
                textTransform: 'none',
                width: 251,
              }}
            />
          </Tabs>
          <S.SearchInputContainer>
            <FormControl variant="standard" fullWidth>
              <Input
                id="search-bar"
                placeholder="O que você está procurando?"
                disableUnderline
                endAdornment={
                  <InputAdornment position="end">
                    <SearchIcon />
                  </InputAdornment>
                }
              />
            </FormControl>
          </S.SearchInputContainer>
        </Box>
        <TabPanel value={value} index={0}>
          <Navigate to="/dados-cadastrais" replace={true} />
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
