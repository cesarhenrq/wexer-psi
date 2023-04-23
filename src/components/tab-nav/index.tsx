import { useState, SyntheticEvent } from 'react';
import { InputAdornment, useTheme } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Outlet, useNavigate } from 'react-router-dom';
import * as S from './styles';
import TabPanel from '../tab-panel';

const TabNav = () => {
  const [value, setValue] = useState(0);

  const theme = useTheme();

  const navigate = useNavigate();

  const handleClick = (route: string) => {
    navigate(`/${route}`);
  };

  const a11yProps = (index: number) => ({
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  });

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <S.Container>
      <S.OutterBox>
        <S.InnerBox theme={theme}>
          <S.StyledTabs
            theme={theme}
            value={value}
            onChange={handleChange}
            aria-label="navigation tabs"
          >
            <S.StyledTab
              theme={theme}
              label="Dados Cadastrais"
              {...a11yProps(0)}
              onClick={() => handleClick('dados-cadastrais')}
            />
            <S.StyledTab
              theme={theme}
              label="Prontuário"
              {...a11yProps(1)}
              onClick={() => handleClick('prontuário')}
            />
          </S.StyledTabs>
          <S.TextFieldBox theme={theme}>
            <S.TabNavTextField
              placeholder="O que você está procurando?"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </S.TextFieldBox>
        </S.InnerBox>
        <TabPanel value={value} index={0}>
          <Outlet />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Outlet />
        </TabPanel>
      </S.OutterBox>
    </S.Container>
  );
};

export default TabNav;
