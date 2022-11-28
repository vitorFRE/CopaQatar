import React from 'react';

export const GetURL = (name) => {
  return new URL(`/src/assets/Teams/${name}.svg`, import.meta.url).href;
};
