//memoizing a function in global

let cache = {}
const add = (a,b) => {
    return  a+b
}

const power = (a,b) => {
    return a**b
}


const memoize = (fn, orderMatters=true) => {
    let cache = {}
    return (...args) => {
        const updatedArgs = orderMatters ? args : args.toSorted()
        const stringifiedArgs = JSON.stringify(updatedArgs)
        console.log(stringifiedArgs)
        if (stringifiedArgs in cache) {
            console.log('Fetching from cache')
            return cache[stringifiedArgs]
        }
        else {
            console.log('Calculating result')
            const result = fn(...args)
            cache[stringifiedArgs] = result
            return result
        }
    }
}



const memoizedAdd = memoize(add,orderMatters=false)
const memoizedPower = memoize(power)

console.log(memoizedAdd(2,2))
console.log(memoizedAdd(2,2))
console.log(memoizedPower(3,4))
console.log(memoizedPower(4,3))

