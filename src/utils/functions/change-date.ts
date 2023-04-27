const changeDate = (data: string) => {
  const dataObj = new Date(data);
  const day = dataObj.getDate();
  const month = dataObj.getMonth();
  const year = dataObj.getFullYear();
  const months = [
    'janeiro',
    'fevereiro',
    'março',
    'abril',
    'maio',
    'junho',
    'julho',
    'agosto',
    'setembro',
    'outubro',
    'novembro',
    'dezembro',
  ];
  return `${day} de ${months[month]} de ${year}`;
};

export default changeDate;
