// Code your solution here

function findMatching(array, string){
    return array.filter(i => i.toUpperCase() === string.toUpperCase());
}

function fuzzyMatch(array, string){
    return array.filter(i => i[0].toUpperCase() === string[0].toUpperCase());
}

function matchName(array, string){
    return array.filter(i => i.name === string);
}