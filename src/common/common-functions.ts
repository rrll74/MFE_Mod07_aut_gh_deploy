export const invert_date = (date: string): string => {
  // Convert dd-mm-yyyy -> yyyy-mm-dd o yyyy-mm-dd -> dd-mm-yyyy
  return date.split("-").reduceRight((acc, current) => acc.concat(`-${current}`));
};
