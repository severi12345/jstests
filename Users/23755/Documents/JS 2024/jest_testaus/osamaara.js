function osamaara (a, b) {
    if (typeof a !== "number" || typeof b !== "number"){
        console.log("täytyy olla numero");
    } else if (b == 0){
        console.log("nollalla ei voi jakaa");
    } else {
        return a / b;
    }
}