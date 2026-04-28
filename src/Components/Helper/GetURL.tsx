export const GetURL = (name: string): string => {
  return new URL(`/src/assets/Teams/${name}.svg`, import.meta.url).href;
};
