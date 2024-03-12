export const convertParamsToQuery = <T extends object>(params: T): string => {
  const result = Object.entries(params)
    .filter(([, val]) => val)
    .reduce<string[]>((acc, [key, val]) => {
      return [...acc, `${encodeURIComponent(key)}=${encodeURIComponent(val)}`];
    }, [])
    .join("&");

  return `${window.location.origin}?${result}`;
};
