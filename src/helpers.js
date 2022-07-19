const clearNumber = (value) => value.replace(/\D+/g, "");

export const formatCardNumber = (value) => {
  if (!value) return value;

  return `${value.slice(0, 4)} ${value.slice(4, 8)} ${value.slice(
    8,
    12
  )} ${value.slice(12, 16)}`;
};

export const formatExpirationDate = (value) => {
  if (value.length >= 2) {
    return `${value.slice(0, 2)}/${value.slice(2, 4)}`;
  }

  return value;
};

export const formatCurrency = (value) => {
  if (!value) return value;
  const roundedValue = Math.round(value * 100) / 100;
  const splitValue = roundedValue.toString().split(".");
  const formatedValue = splitValue[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  const hasDecimals = splitValue.length > 1;
  const decimals = hasDecimals ? splitValue[1] : "";

  return hasDecimals ? `${formatedValue},${decimals}` : formatedValue;
};

export const formatCardForm = (value, name, type) => {
  const clearValue = clearNumber(value);

  let formatedData = {};
  const setter = (val, max) => {
    formatedData = { val, max };
  };

  switch (name) {
    case "cardNumber":
      setter(formatCardNumber(clearValue), 19);
      break;
    case "expirationDate":
      setter(formatExpirationDate(clearValue), 5);
      break;
    case "securityCode":
      setter(clearValue, 3);
      break;
    case "idNumber":
      setter(clearValue, 8);
      break;
    default:
      setter(value, 25);
  }

  return type === "maxLength" ? formatedData.max : formatedData.val;
};
