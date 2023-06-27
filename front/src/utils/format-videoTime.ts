export const formatVideoTime = (time: number): string => {
  const MINUTES = 60;
  const value =
    Math.floor(time / MINUTES) +
    ':' +
    ('0' + Math.floor(time % MINUTES)).slice(-2);
  return value;
};
