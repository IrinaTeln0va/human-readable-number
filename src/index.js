module.exports = function toReadable(number) {

  const units = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

  const tens = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  if (number == 0) {
    return 'zero';
  }

  const string = String(number);

  switch (string.length) {
    case 1:
      return for1Number(string[0]);
      break;

    case 2:
      return for2Numbers(string[0], string[1]);
      break;

    case 3:
      return for3Numbers(string[0], string[1], string[2]);
      break;
  }

  function for1Number(first) {
    return first == 0 ? false : units[first - 1];
  }

  function for2Numbers(first, second) {
    if (first + second > 19) {
      return tens[first - 1] + (for1Number(second) ? ` ${for1Number(second)}` : '');
    } else {
      return units[first + second - 1];
    }
  }

  function for3Numbers(first, second, third) {
    return for1Number(first) + ' hundred' + (for2Numbers(second, third) ? ` ${for2Numbers(second, third)}` : '');
  }
}
