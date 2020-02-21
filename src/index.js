module.exports = function toReadable(number) {
    let numberToArray = String(number).split('')
    let simpleNumber = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',

    };

    if (number <= 20) {
        return simpleNumber[number]
    } else if (number > 20 && number < 100 && number % 10 == 0) {
        return simpleNumber[number]
    } else if (number < 100 && number % 10 != 0) {
        return simpleNumber[Number(numberToArray[0]) * 10] + ' ' + simpleNumber[Number(numberToArray[1])]
    } else if (number % 100 == 0) {
        return simpleNumber[Number(numberToArray[0])] + ' hundred'
    } else if (number > 100 && number % 100 != 0 && number % 10 != 0 && number % 100 > 20) {
        return simpleNumber[Number(numberToArray[0])] + ' hundred ' + simpleNumber[Number(numberToArray[1]) * 10] + ' ' + simpleNumber[Number(numberToArray[2])]
    } else if (number > 100 && number % 100 != 0 && number % 10 != 0 && number % 100 < 20) {
        return simpleNumber[Number(numberToArray[0])] + ' hundred ' + simpleNumber[number % 100]
    } else if (number > 100 && number % 10 == 0) {
        return simpleNumber[Number(numberToArray[0])] + ' hundred ' + simpleNumber[Number(numberToArray[1])*10]
    }
}
