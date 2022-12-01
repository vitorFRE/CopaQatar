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
