var button = document.getElementById('button');
var table = document.getElementById('table');

button.addEventListener('click', () => {
    table.innerHTML = '';
    table.classList.add('table');
    let number = Number(document.getElementById('number').value);

    if (number == 0) {
        table.innerHTML = 'Type a valid number';
        return;
    } else if (number > 1000) {
        table.innerHTML = 'Type a number less than 1001.';
        return;
    }

    let i = 1;
    while (i <= 10) {
        let tr = document.createElement('tr');
        let num0 = document.createElement('td');
        let oper = document.createElement('td');
        let num1 = document.createElement('td');
        let equal = document.createElement('td');
        let num2 = document.createElement('td');

        let multiply = number * i;

        num0.innerHTML = number;
        oper.innerHTML = 'X';
        num1.innerHTML = i;
        equal.innerHTML = '=';
        num2.innerHTML = multiply;

        tr.appendChild(num0);
        tr.appendChild(oper);
        tr.appendChild(num1);
        tr.appendChild(equal);
        tr.appendChild(num2);
        table.appendChild(tr);
        i++;
    }
})