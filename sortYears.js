const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922];

const sortYears = arr => {
  arr.sort();
  arr.reverse();
  return arr;
}

console.log(sortYears(years));