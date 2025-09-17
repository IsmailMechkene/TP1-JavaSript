{
    var a = 100;   // redefines a outside the block too
    let b = 200;   // exists only inside this block
    const c = 300; // exists only inside this block

    console.log("Inside block:", a, b, c);
}

console.log("Outside block:", a); // a = 100 (var ignores block)
console.log("Outside block:", b); // ❌ Error: b is not defined
console.log("Outside block:", c); // ❌ Error: c is not defined


const c = 50;
c = 60; // ❌ TypeError: Assignment to constant variable
