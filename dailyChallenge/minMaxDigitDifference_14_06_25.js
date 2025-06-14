/**
 * @param {number} num
 * @return {number}
 */
var minMaxDifference = function(num) {
    const strNum = num.toString();

    
    const digitToMax = strNum.split('').find(ch => ch !== '9');
    const maxNum = digitToMax 
        ? Number(strNum.split(digitToMax).join('9')) 
        : num;

   
    const digitToMin = strNum[0]; 
    const minNum = Number(strNum.split(digitToMin).join('0'));

    return maxNum - minNum;
};
