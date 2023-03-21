import { useState, SyntheticEvent } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabPanel from '../tab-panel';
import Box from '@mui/material/Box';
import { Outlet, useNavigate, Navigate } from 'react-router-dom';

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
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="navigation tabs"
        >
          <Tab
            label="Dados Cadastrais"
            {...a11yProps(0)}
            onClick={() => handleClick('dados-cadastrais')}
          />
          <Tab
            label="Prontuário"
            {...a11yProps(1)}
            onClick={() => handleClick('prontuário')}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Navigate to="/dados-cadastrais" replace={true} />
        <Outlet />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Outlet />
      </TabPanel>
    </Box>
  );
};

export default TabNav;
