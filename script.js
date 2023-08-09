// Your Script here.

const lookup = {
  A: "N",
  B: "O",
  C: "P",
  D: "Q",
  E: "R",
  F: "S",
  G: "T",
  H: "U",
  I: "V",
  J: "W",
  K: "X",
  L: "Y",
  M: "Z",
  N: "A",
  O: "B",
  P: "C",
  Q: "D",
  R: "E",
  S: "F",
  T: "G",
  U: "H",
  V: "I",
  W: "J",
  X: "K",
  Y: "L",
  Z: "M",
  "?": "?",
  ",": ",",
};

let A = "A".charCodeAt(0); /// 65
let Z = "Z".charCodeAt(0); // 90
function rot13(str) {
    let ans = "" ; 
    // for(let i = 0; i < str.length; i++){
    //     // i = 0
    //     let currentChar = str[i].charCodeAt(0);
    //     if(currentChar <= Z && currentChar >= A){
    //         ans += lookup[str[i]]
    //     }
    //     else {
    //         ans += str[i] ;
    //     }
    // }


	
    for(let i = 0; i < str.length; i++){
        // i = 0
        // let currentChar = str[i].charCodeAt(0);
        if(str[i] != " "){
            ans += lookup[str[i]]
        }
        else {
            ans += str[i] ;
        }
    }
    return ans ;
}

// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line


// Do not change this line
window.rot13 = rot13;
