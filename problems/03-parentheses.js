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

        for (let i = 0; i<value.length;  i++){
            const car = value[i];
            if (car === '('){
                count ++;
            '0'} else if (char === `)`) {
                count   --
            }
            if(count < 0 ){
            return    false   
            }
        }  

    if 



        return count === 0;
    }

    module.exports = parentheses        ;
