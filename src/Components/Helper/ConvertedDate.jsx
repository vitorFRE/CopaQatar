import React from 'react';

export const ConvertedDateHour = (data) => {
  let utcDate = data;
  let localDate = new Date(utcDate);
  return localDate.toString().split(' ')[4].slice(0, 5);
};

export const ConvertedDateDay = (data) => {
  let utcDate = data;
  let localDate = new Date(utcDate);
  return localDate.toString().split(' ')[2];
};

export const ConvertedDateMonth = (data) => {
  let utcDate = data;
  let localDate = new Date(utcDate);
  return localDate.toString().split(' ')[1];
};

const t = '{"player_off":"Lucas Paqueta","player_on":"Rodrygo"}';

export const ConvertedDateTest = (t) => {
  value = t;
  valor1 = value
    .split(',')[1]
    .replace('player_on', 'Entra')
    .replace(/[""{}:]/g, ' ');

  valor2 = value
    .split(',')[0]
    .replace('player_off', 'Sai')
    .replace(/[""{}:]/g, ' ');

  return valor1, valor2;
};
