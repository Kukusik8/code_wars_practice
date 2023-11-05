// Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

// Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

// Create a function which translates a given DNA string into RNA.

// For example:

// "GCAT"  =>  "GCAU"

// function DNAtoRNA(dna) {
//   let res = "";
//   for (let letter of dna) {
//     if (letter === "G") {
//       res += "G";
//     } else if (letter === "C") {
//       res += "C";
//     } else if (letter === "A") {
//       res += "A";
//     } else if (letter === "T") {
//       res += "U";
//     }
//   }

//   return res;
// }

//Более просто
function DNAtoRNA(dna) {
  return dna.replaceAll("T", "U");
}

console.log(DNAtoRNA("TAAT"));

//метод replace - только первое совпадение ищет , replaceAll ищет все совпадения, но метод сравнительно новый 2021 ECMA

