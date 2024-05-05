const formatDate = (data) => {
  const date = new Date(data).toLocaleDateString('es-AR', {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return date;
};

export default formatDate;
