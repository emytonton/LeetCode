/**
 * @param {number} num
 * @return {number}
 */
var maxDiff = function(num) {
    const s = String(num);

   
    let aStr = s;
    let digitToChangeForMax = '';
    
   
    for (const digit of s) {
        if (digit !== '9') {
            digitToChangeForMax = digit;
            break;
        }
    }
    
    if (digitToChangeForMax) {
        aStr = s.replace(new RegExp(digitToChangeForMax, 'g'), '9');
    }
    const a = parseInt(aStr);

    
    let bStr = s;
    
    
    if (s[0] !== '1') {
        const digitToChangeForMin = s[0];
        bStr = s.replace(new RegExp(digitToChangeForMin, 'g'), '1');
    } 
    
    else {
        let digitToChangeForMin = '';
        for (let i = 1; i < s.length; i++) {
            if (s[i] !== '0' && s[i] !== '1') {
                digitToChangeForMin = s[i];
                break;
            }
        }
        
        if (digitToChangeForMin) {
            bStr = s.replace(new RegExp(digitToChangeForMin, 'g'), '0');
        }
    }
    const b = parseInt(bStr);

    return a - b;
};