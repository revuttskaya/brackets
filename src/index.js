module.exports = function check(str, bracketsConfig) {
    let closingBracketsIndicesQueue = [];
    let joinedBracketsConfig = '';

    for (let bracketConfig of bracketsConfig) {
        for (let bracketConfigElement of bracketConfig) {
            joinedBracketsConfig += bracketConfigElement;
        }
    }

    for (let inputBracket of str) {
        let indexOfConfigBracket = joinedBracketsConfig.indexOf(inputBracket);
        if (indexOfConfigBracket === -1) {
            return false;
        }

        if (indexOfConfigBracket % 2 === 0) {
            closingBracketsIndicesQueue.push(indexOfConfigBracket + 1);
        } else {
            if (closingBracketsIndicesQueue.pop() !== indexOfConfigBracket) {
                return false;
            }
        }
    }

    return closingBracketsIndicesQueue.length === 0;
};

