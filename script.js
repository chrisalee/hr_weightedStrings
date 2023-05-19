/*
 * Complete the 'weightedUniformStrings' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER_ARRAY queries
 */

const weightedUniformStrings = (s, queries) => {
    const allLetters = 'abcdefghijklmnopqrstuvwxyz';
    const arrayOfS = [...s];
    const weights = [];
    // uniform contiguous substring of s 
    // (A uniform string consists of a single character repeated zero or more times. For example, ccc and a are uniform strings, but bcb and cd are not.)
    let uniformSubLen = 1;
    arrayOfS.forEach((letter, idx) => {
        // if current letter equals next letter
        if (letter === arrayOfS[idx + 1]) {
            uniformSubLen++;
            return;
        }
        // current letter consecutive count
        let currUniformLen = 1;
        // add the weighted value of all uniform strings to weights
        while (currUniformLen <= uniformSubLen) {
            weights.push(currUniformLen * (allLetters.indexOf(letter) + 1))
            currUniformLen++;
        }
        uniformSubLen = 1;
    });
    //  
    return queries.map((entry) => weights.includes(entry) ? 'Yes' : 'No')
}
