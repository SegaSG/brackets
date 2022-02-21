module.exports = function check(str, bracketsConfig) {
  let bracketsArr = bracketsConfig.join('').replace(/,/g, '');
  let arr = [];
  for (let bracket of str) {
    let bracketsIndex = bracketsArr.indexOf(bracket);
    if (bracketsIndex % 2 === 0) {
      if (bracket === bracketsArr[bracketsIndex + 1] && arr[arr.length - 1] === bracketsIndex){
        arr.pop();
      } else if (bracket === bracketsArr[bracketsIndex + 1] && arr[arr.length - 1] !== bracketsIndex) {
        arr.push(bracketsIndex)
      } else {
        arr.push(bracketsIndex)
        }
      } else {
        if (arr.pop() !== bracketsIndex - 1){
          return false;
        }
    }      
  }
  return arr.length === 0
}
