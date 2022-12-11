function deepReverse(l){
    if(!Array.isArray(l)) {
        return l
    }
    return l.map(el=> deepReverse(el)).reverse()
}