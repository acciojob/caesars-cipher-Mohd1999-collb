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

function rot13(encodedStr) {
  let decodedArr = []; // Your Result goes here
  // Only change code below this line
 for (let i = 0; i < encodedStr.length; i++) {
        let char = encodedStr.charAt(i);
          if (char == " ") {
            decodedArr[i] = " ";
        }else{
            decodedArr[i] = lookup[char];
        }
        
    }
	  // return; 
	return decodedArr
}

// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line
let arr  = rot13("SERR YBIR? NPPVBWBO"); 
let ans = "";

for (let i = 0; i < arr.length; i++) {
	if (arr[i] != " ") {
		ans += arr[i];
	}else{
		ans += " ";
	}
}
console.log(ans);

// Do not change this line
window.rot13 = rot13;
