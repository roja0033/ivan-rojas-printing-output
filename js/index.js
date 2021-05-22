let a = 3;
let b = 5;
let c;

let operation = 'let a = 3; \nlet b = 5;  \nlet c;  \n--------';

operation = operation + '\na + b = ' + (a + b);
operation = operation + '\na - b = ' + (a - b);
operation = operation + '\na * b = ' + (a * b);
operation = operation + '\na / b = ' + (a / b);
operation = operation + '\na % b = ' + (a % b);
operation = operation + '\na += b = ' + (a += b);
operation = operation + '\na -= b = ' + (a -= b);
operation = operation + '\na *= b = ' + (a *= b);
operation = operation + '\na /= b = ' + (a /= b);
operation = operation + '\na %= b = ' + (a %= b);
operation = operation + '\na == b = ' + (a == b);
operation = operation + '\na != b = ' + (a != b);
operation = operation + '\na > b = ' + (a > b);
operation = operation + '\na < b = ' + (a < b);
operation = operation + '\n!a && !c = ' + (!a && !c);
operation = operation + '\n!a || !c = ' + (!a || !c);
alert(operation);


let first_name = 'Ivan';
let last_name = 'Rojas';
let email = 'ivanrojas1210@hotmail.com';

let output = 'My name is ' + first_name + ' ' + last_name + '. '
    + 'You can contact me at ' + email;

alert(output);