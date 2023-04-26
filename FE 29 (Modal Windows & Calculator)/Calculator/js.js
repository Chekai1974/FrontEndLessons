// const dispaly = document.querySelector('.dispaly');
// const btn = document.querySelector('.btn');
// const clear = document.querySelector('.clear');
// const sum = document.querySelector('.sum');

// let first_num = "";
// let second_num = "";
// let operation = null;
// let reset_on_of = false;

// function reset_display() {
//     first_num = "";
//     second_num = "";
//     operation = null;
//     reset_on_of = false;
//     dispaly.innerText = '';
// }
// function add_numbers(num) {
//     if (dispaly.textContent === "0") {
//         dispaly.innerText = num;
//     } else {
//         dispaly.innerText += num;
//     }
// };

// function opretor(operation,a,b) {
//     a = +a;
//     b = +b;
//     switch (operation) {
//         case "+":
//             return a + b;
//         case "-":
//             return a - b;
//         case "*":
//             return a * b;
//         case "/":
//             return a / b;
//     };
// }

// function calculate() {
//     if (dispaly.textContent === "0" && operation === "/") {
//         alert("You can't divide on 0")
//         reset_display()
//     } else {
//         second_num = dispaly.textContent;
//         dispaly.innerText = opretor(operation, first_num, second_num)
//         first_num = dispaly.textContent;
//         second_num = "";
//         operation = null;
//     }
// }

// function set_firstNum_operation(is_oper) {
//     if (operation!=null) {
//         calculate()
//     }
// }


const dispaly = document.querySelector('.dispaly');
const btns = document.querySelectorAll('.btn');


let first_operand = "";
let second_operand = "";
let current_operation = null;
let is_appending = false;

// сбросить все числа и операции 
function reset_calculator() {
    dispaly.innerText = "0";
    first_operand = "";
    second_operand = "";
    current_operation = null;
    is_appending = false;
};
reset_calculator();

// добавляет число на дисплей 
function add_to_dispaly(number) {
    // если числа небыло то добавить его если есть прибавить как строку к нему 
    if (!is_appending) {
        dispaly.innerText = "";
        is_appending = true;
    };
    dispaly.innerText += number;
};

// принимет операцию и два числа переобразовывает их в число 
function operate(operation, a, b) {
    a = parseInt(a);
    b = parseInt(b);
    //если операция ровна каком-то из кейсов до верунть надлежное выполения контекста кейса
    switch (operation) {
        case "+": return a + b;
        case "-": return a - b;
        case "/": return a / b;
        case "*": return a * b;
    };
};

//калькуояция
function calculate() {
    // если не нажимали на какую-то операцию то вернуть ничего 
    if (current_operation === null) {
        return;
    };
    // ошибка при попытке поделить на 0
    if (current_operation === "/" && dispaly.textContent === "0") {
        alert("You can't divide on 0");
        reset_calculator();
        return
    };
    // если все отлично то присвоить второе число 
    second_operand = dispaly.textContent
    // и вывесли на дисполей результат калькуляции
    dispaly.innerText = operate(current_operation, first_operand, second_operand);
    // и потом обнуления и присвоения результата для подальшей роботы
    first_operand = dispaly.textContent;
    second_operand = "";
    current_operation = null;
};

// 
function add_operation(operation) {
    // если было нажато на какето уперации произвести калькуляцию
    if (current_operation !== null) {
        calculate();
    };
    // если нет то присвоить числу результат 
    first_operand = dispaly.textContent;
    current_operation = operation;
    is_appending = false;
};

btns.forEach((button) => {
    button.onclick = () => {
        if (button.classList.contains("sum")) {
            calculate()
        } else if (button.classList.contains("clear")) {
            reset_calculator()
        } else if (button.classList.contains("operator")) {
            add_operation(button.textContent)
        } else {
            add_to_dispaly(button.textContent);
        };
    };
});


document.addEventListener("keydown", (e) => {
    if (e.key >= 0 && e.key <= 9 || e.key === ".") {
        add_to_dispaly(e.key);
    } else if (e.key === 'Escape') {
        reset_calculator();
    } else if (e.key === "Backspace") {
        dispaly.innerText = dispaly.textContent.slice(0, length - 1)
        if (dispaly.textContent === "") {
            dispaly.innerText = "0";
        }
    } else if (e.key === "Enter" || e.key === "=") {
        calculate();
    } else if (e.key === "+" || e.key === "-" || e.key === "/" || e.key === "*") {
        add_operation(e.key);
    }
})