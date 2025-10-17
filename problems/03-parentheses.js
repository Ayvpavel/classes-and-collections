/**
 * Строка со скобками считается валидной, если на каждую закрывающую скобку имеется ранее открытая
 * и на каждую ранее открытую имеется закрывающая.
 *
 * Напишите функцию parentheses(value) проверяющую строку со скобками на валидность.
 *
 * Пример:
 *
 * parentheses('') === false
 * parentheses('()()') === true
 * parentheses('(()())') === true
 * parentheses('(()') === false
 * parentheses(')') === false
 *
 * @param {string} value
 * @returns {boolean}
 */
function parentheses(value) {
    if (value.length === 0) return false;
    let count = 0;

    for (let i = 0; i < value.length; i++) {
        const char = value[i];
        if (char === "(") {
            count++;
        } else if (char === ")") {
            count--;
        }
        if (count < 0) return false;
    }
    return count === 0;
}

module.exports = parentheses;
