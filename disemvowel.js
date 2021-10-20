let disemvowel = str => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let newStr = '';
  let isVowel = false;

  for (let i = 0; i < str.length; i ++) {
    for (let j = 0; j < vowels.length; j++) {
      if (str[i] === vowels[j] || str[i] === vowels[j].toUpperCase())
        isVowel = true;
    }
    if (isVowel === false)
      newStr += str[i];
    else
      isVowel = false;
  }

  return newStr;
}

let string = 'This website is for losers LOL!';

console.log(disemvowel(string));
