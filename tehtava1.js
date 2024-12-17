function arraySum (value) {

    let sum = 0

    for (let i = 0; i < value.length; i++) {
        sum += value[i]
    }

    return sum
}

console.log(arraySum([5,5,1,3]))