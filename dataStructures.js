// level 2
// 1. Write a function to remove all even numbers from an Array.

let input = [1, 3, 4, 6, 7, 8];
function remove_even(input) {
  input.forEach(element => {
    if (element % 2 != 0) {
      console.log(element);
    }
  });
}
remove_even(input);

// 2. Replace all the vowels in a string with uppercase vowels.

function change_text(str) {
  let new_str = "";
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] == "a" ||
      str[i] == "e" ||
      str[i] == "i" ||
      str[i] == "o" ||
      str[i] == "u"
    ) {
      const n_s = str[i].toUpperCase();
      new_str = new_str + n_s;
    } else {
      new_str = new_str + str[i];
    }
  }
  console.log(new_str);
}
let a = "Elie";
change_text(a);

// 3. Write a function to find the maximum number in an array.

let i_array = [1, 3, 4, 6, 7, 8, 2, 5];
let max_arr = Math.max(...i_array);
console.log(max_arr);
