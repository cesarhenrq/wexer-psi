import {
  useState,
  SyntheticEvent,
  useContext,
  useEffect,
  ChangeEvent,
} from 'react';
import { InputAdornment, useTheme } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import * as S from './styles';
import TabPanel from '../../components/tab-panel';
import RegistrationData from '../../components/registration-data';
import MedicalRecord from '../../components/medical-record';
import { ServiceContext } from '../../contexts/ServiceContext';
import { OccurrencesContext } from '../../contexts/OccurrencesContext';
import { getOccurrences } from '../../services/occurrence';

const RecordPage = () => {
  const [value, setValue] = useState(0);

  const theme = useTheme();

  const [occurrenceName, setOccurrenceName] = useState('');

  const { service } = useContext(ServiceContext);

  const { occurrences, setOccurrences } = useContext(OccurrencesContext);

  useEffect(() => {
    const reFetchData = async () => {
      if (occurrenceName === '') {
        const occurrences = await getOccurrences(service._id);
        setOccurrences(occurrences);
      }
    };
    reFetchData();
    const filteredOccurrences = occurrences.filter((occurrence) =>
      occurrence.title.toLowerCase().includes(occurrenceName.toLowerCase())
    );
    setOccurrences(filteredOccurrences);
  }, [occurrenceName, occurrences]);

  const a11yProps = (index: number) => ({
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  });

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleOccurrence = (event: ChangeEvent<HTMLInputElement>) => {
    setOccurrenceName(event.target.value);
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
            />
            <S.StyledTab theme={theme} label="Prontuário" {...a11yProps(1)} />
          </S.StyledTabs>
          {value === 1 ? (
            <S.TextFieldBox theme={theme}>
              <S.TabNavTextField
                value={occurrenceName}
                placeholder="O que você está procurando?"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
                disabled={service.serviceName === '' ? true : false}
                onChange={handleOccurrence}
              />
            </S.TextFieldBox>
          ) : null}
        </S.InnerBox>
        <TabPanel value={value} index={0}>
          <RegistrationData />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <MedicalRecord />
        </TabPanel>
      </S.OutterBox>
    </S.Container>
  );
};

export default RecordPage;
