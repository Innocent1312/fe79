// КАЛЬКУЛЯТОР ПЛОХОЙ
// Но ничего лучше придумать не смог(((


var firstValue = prompt('First Value: ');
var userSign = prompt('Sign: ');
var secondValue = prompt('Second Value: ');
var result;
check();

function check() {

    if (firstValue == 0 && secondValue == 0) {
        return;
    }
    // if (typeof +firstValue !== 'number' && typeof +secondValue !== 'number') {
    //     alert("It must be a number");  // Не работает
    //     return
    // }
    if (userSign !== '+' && userSign !== '-' && userSign !== '*' && userSign !== '/') {
        alert("It must be a correct sign")
        return
    } else {
        makeAction();
    }
};

function makeAction() {

    switch (userSign) {
        case '+':
            result = firstValue + secondValue;
            break;
        case '-':
            result = firstValue - secondValue;
            break;
        case '*':
            result = firstValue * secondValue;
            break;
        case '/':
            result = firstValue / secondValue;
            break;
    };

    alert(`Your result is: ${result} `);
};