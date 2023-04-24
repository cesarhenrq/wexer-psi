import * as yup from 'yup';

export const schema = yup.object().shape({
  behavioralObservationSynthesis: yup.string().required(),
});
