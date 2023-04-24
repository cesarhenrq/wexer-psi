import { useState, useCallback } from 'react';
import { useTheme } from '@mui/material';
import Stepper from '@mui/material/Stepper';
import StepLabel from '@mui/material/StepLabel';
import PsychologicalInterview from '../psychological-interview';
import * as S from './styles';
import TestApplication from '../test-application';
import BehavioralObservation from '../behavioral-observation';

const PsychologicalAssessment = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set<number>());
  const [completedStep, setCompletedStep] = useState([false, false, false]);

  const isStepSkipped = useCallback(
    (step: number) => {
      return skipped.has(step);
    },
    [skipped]
  );

  const handleNext = useCallback(() => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);

    const newCompletedStep = [...completedStep];
    newCompletedStep[activeStep] = true;
    setCompletedStep(newCompletedStep);
  }, [activeStep, completedStep, isStepSkipped, skipped]);

  const handleSkip = useCallback(() => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  }, [activeStep]);

  return (
    <S.StepperBox theme={theme}>
      <Stepper activeStep={activeStep} connector={<div></div>}>
        <S.FirstStep
          theme={theme}
          completed={completedStep[0]}
          active={activeStep === 0}
        >
          <StepLabel>Entrevista Psicológica</StepLabel>
        </S.FirstStep>
        <S.MiddleStep
          theme={theme}
          completed={completedStep[1]}
          active={activeStep === 1}
        >
          <StepLabel>Aplicação de Teste</StepLabel>
        </S.MiddleStep>
        <S.LastStep
          theme={theme}
          completed={completedStep[2]}
          active={activeStep === 2}
        >
          <StepLabel>Observação Comportamental</StepLabel>
        </S.LastStep>
      </Stepper>
      {activeStep === 0 && (
        <PsychologicalInterview
          handleNext={handleNext}
          handleSkip={handleSkip}
        />
      )}
      {activeStep === 1 && (
        <TestApplication handleNext={handleNext} handleSkip={handleSkip} />
      )}
      {activeStep === 2 && <BehavioralObservation handleNext={handleNext} />}
    </S.StepperBox>
  );
};

export default PsychologicalAssessment;
