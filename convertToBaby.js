const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];

const convertToBaby = arr => {
  let babyArr = [];
    for(let i = 0; i < arr.length; i++){
        babyArr.push(`baby ${arr[i]}`);
    }
    return babyArr;
}

console.log(convertToBaby(animals));