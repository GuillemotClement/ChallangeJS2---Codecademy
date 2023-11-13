const speciesArray = [ {speciesName:'shark', numTeeth:50}, {speciesName:'dog', numTeeth:42}, {speciesName:'alligator', numTeeth:80}, {speciesName:'human', numTeeth:32}];

// Write your code here:

//La fonction trie les espèce selon le numéro de dents
const sortSpeciesByTeeth = arr => arr.sort((a, b) => a.numTeeth - b.numTeeth);

console.log(sortSpeciesByTeeth(speciesArray));