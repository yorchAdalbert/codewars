let fakeBin = strArray => {
  let digits = '';

  for (let i = 0; i < strArray.length; i++) {
    let num = parseInt(strArray[i]);

    (num < 5) ? digits += '0' : digits +='1';

    return digits;
  }
};

let strArray = '45385593107843568';

console.log(fakeBin(strArray));
