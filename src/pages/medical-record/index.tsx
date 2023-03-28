import DataPatientCard from '../../components/data-patient-card';
import GenericCard from '../../components/generic-card';
import ModalToolBar from '../../components/modal-tool-bar';
import * as S from './styles';

const MedicalRecord = () => {
  const content =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit blanditiis nobis, quas quibusdam porro commodi consequuntur libero velit necessitatibus optio distinctio corrupti totam, non fugiat quaerat magni enim sit numquam';
  return (
    <div>
      <S.Grid>
        <S.CardContainer>
          <DataPatientCard />
          <GenericCard title="Demandas e objetivos" content={content} />
          <GenericCard title="Anotações pessoais" content={content} />
        </S.CardContainer>
        <S.Container>
          <ModalToolBar />
        </S.Container>
        <S.Content>Conteúdo</S.Content>
      </S.Grid>
    </div>
  );
};

export default MedicalRecord;
