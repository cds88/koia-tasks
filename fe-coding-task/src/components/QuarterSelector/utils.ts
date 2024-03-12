export function getDayOfYear() {
  const now = new Date()
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now - start;
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);
  return dayOfYear;
}

function getAvailableCurrentYearQuarters() {
  const currentYear = new Date().getFullYear();
  const currentYearQuartersLength = Math.ceil(getDayOfYear() / (366 / 4));

  const result = Array.from(
    { length: currentYearQuartersLength },
    (_, index) => `${currentYear}K${index + 1}`
  );

  return result;
}

export function getYears() {
  const currentYear = new Date().getFullYear();
  const startYear = 2009;
  const years = [];
  for (let year = startYear; year <= currentYear; year++) {
    years.push(year);
  }
  return years.sort((a, b) => (a > b ? 1 : a < b ? -1 : 0));
}

export function getYearsWithQuarters() {
  const years = getYears();
  const quarters = ["K1", "K2", "K3", "K4"];
  const currentYear = new Date().getFullYear();

  const yearsWithQuarters = years.reduce<string[]>(
    (acc, year) => [
      ...acc,
      ...(year === currentYear
        ? getAvailableCurrentYearQuarters()
        : quarters.map((quarter) => `${year}${quarter}`)),
    ],
    []
  );

  return yearsWithQuarters;
}
