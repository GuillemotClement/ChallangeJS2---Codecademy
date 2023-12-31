
# ![logo chapeau diplôme](/ressource/diplomeCasquette.png) ChallengeJavaScript 2- Codecademy
[Liens vers les consignes du projet](https://www.codecademy.com/journeys/full-stack-engineer/paths/fscj-22-building-interactive-websites/tracks/fscp-22-javascript-syntax-part-ii-c8ddbace-1463-4797-ae12-503c7b0f9552/modules/wdcp-22-practice-javascript-syntax-arrays-loops-objects-iterators-1214fbf4-8717-4c43-9940-b6599d0f1fb7/lessons/intermediate-javascript-coding-challenge/exercises/introduction)


## ![Logo objectif](/ressource/objectif.png) Objectif 
Cet exercice permet de travailler différents les scope, tableau, boucle, itérateur et objet.


## ![Logo consigne](/ressource/instruction.png) Consigne
1 - reverseArray()
------
Write a function, reverseArray(), that takes in an array as an argument and returns a new array with the elements in the reverse order.

2 - greetAliens()
---
Écrivez une fonction, greetAliens(), qui prend en compte un tableau de chaînes et utilise une forboucle pour imprimer un message d'accueil avec chaque chaîne du tableau.

La salutation doit prendre le format suivant :
« Oh puissant [stringElement], nous, les humains, offrons notre capitulation inconditionnelle ! »

Remarque : Vous avez peut-être remarqué à quel point il serait pratique d'utiliser .forEach(), mais vous n'êtes pas autorisé à l'utiliser ici. Ne vous inquiétez pas, vous aurez de nombreuses occasions d'utiliser les méthodes intégrées plus tard !

3 - convertToBaby()
---
Écrivez une fonction, convertToBaby(), qui prend un tableau comme argument et, à l'aide d'une boucle, renvoie un nouveau tableau avec chaque chaîne du tableau précédée de 'baby '.

Remarque : Vous avez peut-être remarqué à quel point il serait pratique d'utiliser map, mais vous n'êtes pas autorisé à l'utiliser ici. Ne vous inquiétez pas, vous aurez de nombreuses occasions d'utiliser les méthodes intégrées plus tard !

4 - declineEveryThing() and acceptEveryThing()
---
Écrivez une fonction declineEverything()qui prend un tableau de chaînes et, à l'aide de .forEach(), parcourt chaque élément du tableau et appelle politelyDecline()avec chacun d'eux.

La .forEach()fonction doit s'appliquer politelyDecline()directement ; il ne doit PAS simplement recevoir une fonction d'argument qui utilise politelyDecline() .

5 - squareNums()
---
Écrivez une fonction, squareNums(), qui prend un tableau de nombres et, en utilisant .map(), renvoie un tableau avec le carré de chacun des éléments de ce tableau.

6 - shoutGreetings()
---
Écrivez une fonction shoutGreetings()qui prend un tableau de chaînes et renvoie un nouveau tableau. Ce nouveau tableau doit contenir toutes les chaînes du tableau d'arguments mais avec des lettres majuscules et un point d'exclamation ajouté à la fin : 'heya'deviendra'HEYA!'

Vous pouvez utiliser n’importe quelle technique pour accomplir cette tâche.

7 - sortYears()
---
Écrivez une fonction sortYears()qui prend un tableau d'années et, à l'aide de la méthode intégrée.sort() , renvoie ce tableau avec les années triées par ordre décroissant.

8 - justCoolStuff()
---
Écrivez une fonction justCoolStuff()qui prend deux tableaux de chaînes et, à l'aide de la méthode intégrée.filter() , renvoie un tableau avec les éléments présents dans les deux tableaux.

9 - isTheDinnerVegan()
---
Écrivez une fonction isTheDinnerVegan()qui prend en compte un tableau d'objets alimentaires au format :

`{name: 'cabbage', source: 'plant' };`

et renvoie une valeur booléenne selon que chaque élément du tableau a ou non une source 'plant'

10 - sortSpeciesByTeeth()
---
Écrivez une fonction `sortSpeciesByTeeth()` qui prend en compte un tableau d'objets espèces au format :

`{speciesName: 'shark', numTeeth: 50 }`

et trie le tableau par ordre croissant en fonction du nombre moyen de dents que possède l'espèce `numTeeth` .

Vous devrez accéder `.numTeeth` à la propriété de chaque objet. N'hésitez pas à écrire une fonction de comparaison nommée ou à utiliser une fonction anonyme pour votre argument `.sort()`.

11 - findMyKeys()
---
Écrivez une fonction, `findMyKeys()`, qui prend en compte un tableau de chaînes pouvant ou non contenir `'keys'`. Si les clés sont dans le tableau, votre fonction doit renvoyer l'index auquel elles peuvent être trouvées. S'ils ne sont pas dans le tableau, votre fonction doit renvoyer `-1`.

12 - dogFactory()
---
1. Écrivez une fonction, `dogFactory()`. Cela devrait:

- avoir 3 paramètres : `name`, `breed`, et `weight`(dans cet ordre)
- attendre `name` et `breed` être des chaînes
- attendez-vous `weight` à être un numéro
- renvoyer un objet

avoir chacun de ces paramètres comme clés sur l'objet retourné renvoyé avec les valeurs des arguments qui ont été transmis

2. Ajoutez des getters et des setters pour chacune des trois propriétés et modifiez les noms des propriétés pour qu'ils soient précédés d'un trait de soulignement.

3. Ajoutez deux méthodes à votre objet : `.bark()` qui renvoie 'ruff! fraise!' et `.eatTooManyTreats()` qui devrait incrémenter la `weightpropriété` de 1.

## ![Amelioration Logo](/ressource/ameliorationLogo.png) Amélioration future


## ![Logo Technologie](/ressource/technologie.png) Technologie
JavaScript ![Logo JavaScript](/ressource/javascript.png)