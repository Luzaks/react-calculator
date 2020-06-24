const parsingInt = string => parseInt(string, 10);

const calculate = (object, buttonName) => {
  let { total, next, operation } = object;
  switch (buttonName) {
    case '+/-':
      total = parsingInt(total) * (-1);
      break;
    case '.':
      total = '.';
      break;
    case 'AC':
      total = null;
      next = null;
      operation = null;
      break;
    case '=':
      total = 'igual';
      break;
    default:
      if (parsingInt(buttonName) && total) {
        total += buttonName;
      } else {
        total = buttonName;
      }
      break;
  }
  return { total, next, operation };
};

export default calculate;
