export const queryProperties = () =>
  fetch("https://interview.domio.io/properties").then(res => res.json());

export const addDateToProperty = p => ({ ...p, dateTime: new Date() });

export const getNicePrice = price => {
  if (price % 1 !== 0) {
    return price.toString().split(".")[0];
  }
  return price;
};

export const sortByAlphaAddress = properties =>
  properties.sort((a, b) => (a.address > b.address ? 1 : -1));

export const getPricesByAddress = (properties, addr) =>
  properties.filter(({ address }) => addr === address);

export const getPriceHistory = (properties, addr) => {
  const sortedByDate = getPricesByAddress(properties, addr).sort((a, b) =>
    a.date > b.date ? 1 : -1
  );
  const onlyPricesAndDates = Array.from(
    sortedByDate,
    ({ dynamicDisplayPrice, dateTime }) => ({ dynamicDisplayPrice, dateTime })
  );
  return onlyPricesAndDates;
};
