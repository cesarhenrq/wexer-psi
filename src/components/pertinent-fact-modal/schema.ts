import * as yup from 'yup';

export const schema = yup.object().shape({
  date: yup
    .string()
    .required('Data é obrigatória')
    .matches(
      /^(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/,
      'Data inválida, use o formato dd/mm/yyyy'
    ),
  title: yup.string().required(),
  description: yup.string().required(),
});
