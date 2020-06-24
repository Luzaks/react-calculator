import operate from './operate';

const parsingInt = string => parseInt(string, 10);

const calculate = (object, buttonName) => {
  let { total, next, operation } = object;

  switch (buttonName) {
    case '+/-':
      total = parsingInt(total) * (-1);
      next = parsingInt(next) * (-1);
      break;
    case 'AC':
      total = null;
      next = null;
      operation = null;
      break;
    case '=':
      operation = buttonName;
      operate(total, next, operation);
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
