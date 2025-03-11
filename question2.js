//Count properties where it takes the keys of the object and returns the length
const countProperties = (object) => {
    return Object.keys(object).length
}

//to check the output
console.log(countProperties({a:1,b:2,c:3}))