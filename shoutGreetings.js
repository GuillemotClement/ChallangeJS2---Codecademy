const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo'];

const shoutGreetings = arr => {
  const majArray = arr.map(word => `${word.toUpperCase()}!`);
  return majArray;
};

console.log(shoutGreetings(greetings))
