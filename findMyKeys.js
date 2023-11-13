const randomStuff = ['credit card', 'screwdriver', 'receipt', 'gum', 'keys', 'used gum', 'plastic spoon'];

const findMyKeys = arr => {
  arr = arr.findIndex(item => {
    return item === 'keys';
    });
  return arr;
};



console.log(findMyKeys(randomStuff))