// @flow
const compareUnicode = (stringA: string, stringB: string): number => {
  const result = stringA.localeCompare(stringB, 'en');
  return result ? result / Math.abs(result) : 0;
};

export default compareUnicode;
