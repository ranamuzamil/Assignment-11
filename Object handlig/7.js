// 7. Write a JavaScript program which returns a subset of a string.
function getSubsets(str) {
    const subsets = [];

    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j <= str.length; j++) {
            const subset = str.substring(i, j)
            subsets.push(subset)           
            
        }        
    }
    return subsets
}
const str = "dog";
const subsets = getSubsets(str)
console.log(subsets);