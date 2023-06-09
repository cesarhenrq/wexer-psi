import * as yup from 'yup';

export const schema = yup.object().shape({
  date: yup
    .string()
    .required('Data é obrigatória')
    .matches(
      /^(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/,
      'Data inválida, use o formato dd/mm/yyyy'
    ),
  initialHour: yup
    .string()
    .required('Hora inicial é obrigatória')
    .matches(
      /^([01]\d|2[0-3]):([0-5]\d)$/,
      'Hora inválida, use o formato hh:mm'
    ),
  finalHour: yup
    .string()
    .required('Hora final é obrigatória')
    .matches(
      /^([01]\d|2[0-3]):([0-5]\d)$/,
      'Hora inválida, use o formato hh:mm'
    ),
  title: yup.string().required('O título é obrigatório'),
  sessionResume: yup.string().required('Resumo da sessão é obrigatório'),
  price: yup.number(),
  paymentMethod: yup.string(),
  paymentStatus: yup.string(),
});
