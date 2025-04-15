/* 4.22
    Дано натуральное число. Определить:
    а) является ли оно четным;
    б) оканчивается ли оно цифрой 7. */
{
    let a = parseInt(prompt("Введите натуральное число"));
    if (a % 2 == 0) {
        alert("Число четное");
    } else {
        if (a % 10 == 7) {
            alert("Число нечетное, оканчивается цифрой 7");
        }
        else {
            alert("Число нечетное");
        }
    }
}

/* 4.48
    Известен рост трех человек. Определить, одинаков ли их рост? */
{
    let a, b, c;
    a = parseInt(prompt("Введите рост первого человека"));
    b = parseInt(prompt("Введите рост второго человека"));
    c = parseInt(prompt("Введите рост третьего человека"));
    if (a == b && a == c && b == c) {
        alert("Рост одинаков");
    }
    else {
        alert("Рост разный");
    }
}

/* 5.32
    Вычислить сумму 1 + 1/2 + 1/3 + ... + 1/n */
{
    let sum = 0;
    let n = parseInt(prompt("Введите натуральное число"));
    for (let i = 1; i <= n; i++) {
        sum += 1/i;
    }
    alert("Сумма: " + sum);
}

/* 5.42 
    Известны оценки абитуриента на четырех экзаменах. Определить сумму набранных им баллов. */
{
    let sum = 0;
    for (let i = 1; i <= 4; i++) {
        let n = parseInt(prompt("Оценка на экзамене №" + i));
        sum += n;
    }
    alert("Сумма набранных баллов: " + sum);
}

/* 6.47 (в, г)
    Дано натуральное число.
    в) Верно ли, что это число k-значное? Составное условие и вложенный условный оператор не использовать.
    г) Верно ли, что его первая цифра превышает m?
*/
{
    let a = parseInt(prompt("Введите натуральное число"));
    let k = parseInt(prompt("Введите k"));
    let z = 0;
    let firstDigit;
    while (a > 0) {
        z++;
        firstDigit = a % 10;
        a = Math.round(a / 10);
    }
    if (k == z) {
        alert("Да, число " + k + "-значное");
    } else {
        alert("Нет, число не " + k + "-значное");
    }
    let m = parseInt(prompt("Введите m"));
    if (firstDigit > m) {
        alert("Да, первая цифра превышает " + m);
    } else {
        alert("Нет, первая цифра не превышает " + m);
    }
}