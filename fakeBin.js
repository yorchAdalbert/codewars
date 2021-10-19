let fakeBin = strArray => {
  let digits = '';

  for (let i = 0; i < strArray.length; i++) {
    let num = parseInt(strArray[i]);

    if (num < 5) {
      digits += '0';
    } else {
      digits += '1';
    }

  }

  return digits;
};

let strArray = '45385593107843568';

console.log(fakeBin(strArray));
