export function addition(a,b) {
    if(typeof a !== 'number' || typeof b !== 'number'){
        throw new Error("Les deux arguments doivent etre des nombres")
    }

    return  a + b
}