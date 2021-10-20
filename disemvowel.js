let disemvowel = str => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let chars = '';
  for (let i = 0; i < str.length; i ++) {
    for (let j = 0; j < vowels.length; j++) {
      if (str[i] === vowels[j] || str[i] === vowels[j].toUpperCase())
        chars += str[i];
    }
  }

  return chars;
}

let string = 'This website is for losers LOL!';

console.log(disemvowel(string));
