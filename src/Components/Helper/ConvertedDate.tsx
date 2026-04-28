export const ConvertedDateHour = (data: string): string => {
  const utcDate = data;
  const localDate = new Date(utcDate);
  return localDate.toString().split(' ')[4]?.slice(0, 5) ?? '';
};

export const ConvertedDateDay = (data: string): string => {
  const utcDate = data;
  const localDate = new Date(utcDate);
  return localDate.toString().split(' ')[2] ?? '';
};

export const ConvertedDateMonth = (data: string): string => {
  const utcDate = data;
  const localDate = new Date(utcDate);
  return localDate.toString().split(' ')[1] ?? '';
};
