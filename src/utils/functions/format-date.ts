const formatDate = (isoDateString: string) => {
  const date = new Date(isoDateString);

  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  const formattedDate = `${day.toString().padStart(2, '0')}/${month
    .toString()
    .padStart(2, '0')}/${year}`;

  return formattedDate;
};

export default formatDate;
