'use strict';
const allNumbers = [...document.querySelectorAll('.number')];
const screen = document.querySelector('.screen');
const btnOperators = [...document.querySelectorAll('.operator')];
const result = document.querySelector('.result');
const btnOn = document.querySelector('.on');
const btnClear = document.querySelector('.clear');
const btnCopy = document.querySelector('.copy');

let value = false;
let clearDecimal = false;

allNumbers.forEach(elem => {
	elem.addEventListener('click', e => {
		value = false;

		if (e.target.innerHTML == '.') {
			if (!clearDecimal) {
				clearDecimal = true;
				if (screen.innerHTML == '0') {
					screen.innerHTML = '0.';
				} else {
					screen.innerHTML += e.target.innerHTML;
				}
			}
		} else {
			if (screen.innerHTML === '0') {
				screen.innerHTML = '';
			}
			screen.innerHTML += e.target.innerHTML;
		}
	});
	console.log(elem);
});

btnOperators.forEach(elemen => {
	elemen.addEventListener('click', e => {
		if (!value) {
			value = true;
			if (screen.innerHTML === '0') {
				screen.innerHTML = '';
			}

			if (e.target.innerHTML === '*') {
				screen.innerHTML += '*';
			} else {
				screen.innerHTML += e.target.innerHTML;
			}
		}
	});
});

btnClear.addEventListener('click', () => {
	value = false;
	clearDecimal = false;
	screen.innerHTML = '0';
});

result.addEventListener('click', () => {
	value = false;
	clearDecimal = false;
	const res = eval(screen.innerHTML);
	screen.innerHTML = res;
});

btnCopy.addEventListener('click', e => {
	navigator.clipboard.writeText(screen.innerHTML);
});

//console.log(allNumbers);
//console.log(operators);
//console.log(result);
