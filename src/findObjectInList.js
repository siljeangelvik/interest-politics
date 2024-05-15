const allPokemonURL = 'https://pokeapi.co/api/v2/pokemon/';



const objectList = [
    { id: 10, name: "Jane" },
    { id: 36, name: "Steven" }
];



// We can search an array for an object that satisfies an arbitrary condition using the Array object’s find method.
// We could therefore write the function described above as follows:
function findNameById(list, id) {
    return list.find((obj) => obj.id === id).name;
}

console.log(findNameById(objectList, 36)); // will print "Steven"



// Use findIndex method to get the array index of the object instead of the object itself, we can use findIndex instead:
function findNameByIdIndex(list, id) {
    return list[list.findIndex((obj) => obj.id === id)].name;
}

console.log(findNameByIdIndex(objectList, 36)); // will print "Steven"
