// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G".
//  Your function receives one side of the DNA(string, except for Haskell);
//  you need to return the other complementary side.
//  DNA strand is never empty or there is no DNA at all(again, except for Haskell).
// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"

function DNAStrand(dna) {
  let complement = "";
  dna.split("").forEach((element) => {
    if (element === "A") {
      complement += "T";
    } else if (element === "T") {
      complement += "A";
    } else if (element === "C") {
      complement += "G";
    } else if (element === "G") {
      complement += "C";
    }
  });
  return complement;
}

console.log(DNAStrand("AAA"));
