const altNumbers = (arrOfNums) => {
  let result = [];
  const tempArr = [];

  arrOfNums.map((num) => {
    const tempNum = tempArr.find((e) => Math.sign(e) === Math.sign(num));
    const currentDigit = !tempNum ? num : tempNum;
    const isCurrectDigitPositive = Math.sign(currentDigit) === 1;
    const isLastDigitPositive = Math.sign(result[result.length - 1]) === 1;

    if (
      isCurrectDigitPositive &&
      (result.length === 0 || !isLastDigitPositive)
    ) {
      result.push(currentDigit);
      if (tempNum === currentDigit) {
        tempArr.splice(tempArr.indexOf(tempNum), 1);
        tempArr.push(num);
      }
    } else if (!isCurrectDigitPositive && isLastDigitPositive) {
      result.push(currentDigit);
      if (tempNum === currentDigit) {
        tempArr.splice(tempArr.indexOf(tempNum), 1);
        tempArr.push(num);
      }
    } else {
      tempArr.push(num);
    }
  });

  if (tempArr.length > 0) {
    const tempArrContainsSimilarNums = tempArr.filter(
      (e) => Math.sign(e) === 1
    );

    const rest =
      tempArrContainsSimilarNums.length === tempArr.length ||
      tempArrContainsSimilarNums.length === 0
        ? tempArr
        : altNumbers(tempArr);

    result = [...result, ...rest];
  }
  return result;
};
const output = altNumbers([3, -1, 2, 4, -2, -10, 5, -6, 8, -8, -1]);
// console.log(output);
