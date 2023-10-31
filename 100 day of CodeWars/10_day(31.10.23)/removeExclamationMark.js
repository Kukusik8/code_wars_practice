function removeExclamationMark(s) {
    let toarr = s.split("");
    
    for (let i = 0; i < toarr.length; i++) {
        if (toarr[i] === "!") {
            toarr.splice(i, 1);
  
        }
    }
    return toarr.join("");
}

console.log(removeExclamationMark("Hello!!!"));


// if (toarr.includes("!")) {
//   toarr.pop("!");
// }
// return toarr.join("");