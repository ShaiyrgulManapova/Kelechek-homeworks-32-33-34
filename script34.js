// 34 switch, логические операции, массивы ------------

// 1. Разработайте программу, запрашивающую у пользователя букву латинского алфавита. Если введенная буква входит в следующий список (a, e, i, o или u), необходимо вывести сообщение о том, что эта буква гласная. Если была введена буква **y**, программа должна написать, что эта буква может быть как гласной, так и согласной. Во всех других случаях должно выводиться сообщение о том, что введена согласная буква.

let randomLetter = prompt('Введите букву латинского алфавита');

switch (randomLetter) {
	case 'a':
	case 'e':
	case 'i':
	case 'o':
	case 'u':
		alert('Эта буква гласная');
		break;
	case 'y':
		alert('Эта буква может быть как гласной, так и согласной');
		break;
	default: 
		alert('Эта буква согласная');
}



// 2. Напишите программу, запрашивающую у пользователя три целых числа и выводящую их в упорядоченном виде – по возрастанию.

let firstNumber = +prompt('Введите первое число');
let secondNumber = +prompt('Введите второе число');
let thirdNumber = +prompt('Введите третье число');

switch (true) {
	case firstNumber < secondNumber && firstNumber < thirdNumber:
		alert(firstNumber);
			case secondNumber < thirdNumber:
				alert(secondNumber);
				alert(thirdNumber);
				document.write(firstNumber + ' ' + secondNumber + ' ' + thirdNumber);
		break;

	case secondNumber < firstNumber && secondNumber < thirdNumber:
		alert(secondNumber);
			case firstNumber < thirdNumber:
				alert(firstNumber);
				alert(thirdNumber);
				document.write( secondNumber + ' ' + firstNumber + ' ' + thirdNumber);
		break;

	case thirdNumber < firstNumber && thirdNumber < secondNumber:
		alert(thirdNumber);
			case firstNumber < secondNumber:
				alert(firstNumber);
				alert(secondNumber);
				document.write( thirdNumber + ' ' + firstNumber + ' ' + secondNumber);
		break;

	default:
		alert('Числа не отсортированы');
}




// 3. В табл. представлен уровень громкости в децибелах для некоторых распространенных источников шума.

// Уровни громкости различных источников:
// Отбойный молоток - 130 дБ
// Газовая газонокосилка - 106 дБ
// Будильник - 70 дБ
// Тихая комната - 40 дБ

// Создайте программу, в которой пользователь будет вводить уровень шума в децибелах. Если введенное им значение будет в точности совпадать с одним из значений в приведенной таблице, необходимо вывести, чему соответствует указанный уровень громкости. Если значение попадет между уровнями в таблице, нужно сообщить, между какими именно. Также программа должна выдавать корректные сообщения, в случае если введенное пользователем значение окажется ниже минимального или больше максимального.

const JACKHAMMER = 130;
const GAS_PIPE = 106;
const ALARM = 70;
const SILENT_ROOM = 40;

let noise = +prompt('Введите уровень шума в децибелах');

switch (true) {
	case noise === JACKHAMMER:
		alert('Отбойный молоток');
		break;
	case noise === GAS_PIPE:
		alert('Газовая газонокосилка');
		break;
	case noise === ALARM:
		alert('Будильник');
		break;
	case noise === SILENT_ROOM:
		alert('Тихая комната');
		break;


	case noise > JACKHAMMER:
		alert('Звук слишком высокий');
		break;
	case noise < JACKHAMMER && noise > GAS_PIPE:
		alert('Звук в диапазоне от газовой газонокосилки до отбойного молотка');
		break;
	case noise < GAS_PIPE && noise > ALARM:
		alert('Звук в диапазоне от будильника до газовой газонокосилки');
		break;
	case noise < ALARM && noise > SILENT_ROOM:
		alert('Звук в диапазоне от тихой комнаты до будильника');
		break;
	case noise < SILENT_ROOM:
		alert('Звук слишком низкий');
		break;
	default:
		alert('Введенное значение не соответствует ни одному из значений в таблице');
}




// 4. Напишите программу, которая будет запрашивать у пользователя номинал банкноты и отображать на экране имя деятеля, портрет которого размещен на соответствующем денежном знаке. Если банкноты введенного номинала не существует, должно выводиться сообщение об ошибке.
// Джордж Вашингтон - $1.00
// Томас Джефферсон - $2.00
// Авраам Линкольн - $5.00
// Александр Гамильтон - $10.00
// Эндрю Джексон - $20.00
// Улисс Грант - $50.00
// Бенджамин Франклин - $100.00

let nominal = +prompt('Введите номинал банкноты');
nominal = nominal.toFixed(2);

switch (nominal) {
	case '1.00':
		alert('Джордж Вашингтон');
		break;
	case '2.00':
		alert('Томас Джефферсон');
		break;
	case '5.00':
		alert('Авраам Линкольн');
		break;
	case '10.00':
		alert('Александр Гамильтон');
		break;
	case '20.00':
		alert('Эндрю Джексон');
		break;
	case '50.00':
		alert('Улисс Грант');
		break;
	case '100.00':
		alert('Бенджамин Франклин');
		break;
	default:
		alert('Номинал не существует');
}




// 5. Разработайте программу, принимающую на вход дату и выводящую на экран дату, следующую за ней. Например, если пользователь введет дату, соответствующую 18 ноября 2019 года, на экран должен быть выведен следующий день, то есть 19 ноября 2019 года. Если входная дата будет представлять 30 ноября, то на выходе мы должны получить 1 декабря. И наконец, если ввести последний день года – 31 декабря 2019-го, пользователь должен увидеть на экране дату 1 января 2020-го. Дату пользователь должен вводить в три этапа: год, месяц и день. Убедитесь, что ваша программа корректно обрабатывает високосные годы.

let userYear = +prompt('Введите год');
let userMonth = prompt('Введите месяц');
let userDay = +prompt('Введите день');

userMonth = userMonth.toLowerCase();


let outputDate;
let outputMonth;
let outputYear = userYear;

switch (userMonth) {
	case "январь":
		if (userDay === 31) {
			outputDate = 1;
			outputMonth = "февраль";
		} else {
			outputDate = userDay + 1;
			outputMonth = userMonth;
		}
		break;

	case "февраль":
		if (userYear % 4 === 0 && userDay === 28) {
			outputDate = 1;
			outputMonth = "март";
		} else if (userYear % 4 !== 0 && userDay === 29) {
			outputDate = 1;
			outputMonth = "март";
		} else {
			outputDate = userDay + 1;
			outputMonth = userMonth;
		}
		break;

	case "март":
		if (userDay === 31) {
			outputDate = 1;
			outputMonth = "апрель";
		} else {
			outputDate = userDay + 1;
			outputMonth = userMonth;
		}
		break;

	case "апрель":
		if (userDay === 31) {
			outputDate = 1;
			outputMonth = "май";
		} else {
			outputDate = userDay + 1;
			outputMonth = userMonth;
		}
		break;

	case "май":
		if (userDay === 31) {
			outputDate = 1;
			outputMonth = "июнь";
		} else {
			outputDate = userDay + 1;
			outputMonth = userMonth;
		}
		break;

	case "июнь":
		if (userDay === 31) {
			outputDate = 1;
			outputMonth = "июль";
		} else {
			outputDate = userDay + 1;
			outputMonth = userMonth;
		}
		break;

	case "июль":
		if (userDay === 31) {
			outputDate = 1;
			outputMonth = "август";
		} else {
			outputDate = userDay + 1;
			outputMonth = userMonth;
		}
		break;

	case "август":
		if (userDay === 31) {
			outputDate = 1;
			outputMonth = "сентябрь";
		} else {
			outputDate = userDay + 1;
			outputMonth = userMonth;
		}
		break;

	case "сентябрь":
		if (userDay === 31) {
			outputDate = 1;
			outputMonth = "октябрь";
		} else {
			outputDate = userDay + 1;
			outputMonth = userMonth;
		}
		break;

	case "октябрь":
		if (userDay === 31) {
			outputDate = 1;
			outputMonth = "ноябрь";
		} else {
			outputDate = userDay + 1;
			outputMonth = userMonth;
		}
		break;

	case "декабрь":
		if (userDay === 31) {
			outputDate = 1;
			outputMonth = "январь";
			outputYear = userYear + 1;
		} else {
			outputDate = userDay + 1;
			outputMonth = userMonth;
		}
		break;

	default:
		outputDate = userDay + 1;
		outputMonth = userMonth;
		break;
}

let message = `Следующая дата: ${outputDate} ${outputMonth} ${outputYear}`;

document.write(message);