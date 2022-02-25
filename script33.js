// 33 null, undefined, bool. If ... else -----------------------

// 1. В переменную lang нужно получить данные от пользователя если пользователь введет “ru” нужно приветствовать его на русском если “ky” на кыргызском если будет другое значение нужно вывести сообщение “Я не знаю такого языка”

let lang = prompt("ru - Русский, ky - Кыргызский");
if (lang === "ru") {
	alert("Привет!");
} else if (lang === "ky") {
	alert("Салам!");
} else {
	alert("Я не знаю такого языка");
}



// 2. Дана строка, состоящая из символов, например, 'abcde'. Проверьте, что первым символом этой строки является буква 'a'. Если это так - выведите 'да', в противном случае выведите 'нет'.

let string = "ahdf";

string[0] === 'a' ? console.log("да") : console.log("нет");




// 3. Дано число с цифрами, например, 12345. Проверьте, что первая цифра числа 1, 2 или 3. Если это так - выведите 'да', в противном случае выведите 'нет'.

let a = prompt("Введите число");

a[0] == 1 || a[0] == 2 || a[0] == 3 ? console.log("да") : console.log("нет");




// 4. Определяем и выводим на экран информацию о том, четное введенное число или нечетное
let oddEven = prompt("Введите число");

if (oddEven % 2 === 0) {
	document.write("четное");
} else {
	document.write("нечетное");
};


// 5. Пользователь вводит название месяца исходя из введенного названия месяца нужно вывести сообщение с названием времени года.  
// Например:
// Пользователь: январь
// Компьютер: это зима

let month = prompt("Введите название месяца");
month = month.toLowerCase();

if (month === "декабрь" || month === "январь" || month === "февраль") {
	document.write("Это зима");
} else if (month === "март" || month === "апрель" || month === "май") {
	document.write("Это весна");
} else if (month === "июнь" || month === "июль" || month === "август") {
	document.write("Это лето");
} else if (month === "сентябрь" || month === "октябрь" || month === "ноябрь") {
	document.write("Это осень");
} else {
	document.write("Нет такого месяца");
}



// 6. Определяем животное, ассоциированное с введенным годом в китайском гороскопе
// Например:
// Пользователь: 2021
// Компьютер: Бык

let year = Number(prompt("Введите год"));
let cycle = 12;

if (year % cycle === 0) {
	document.write("Обезьяна");
} else if (year % cycle === 1) {
	document.write("Петух");
} else if (year % cycle === 2) {
	document.write("Собака");
} else if (year % cycle === 3) {
	document.write("Свинья");
} else if (year % cycle === 4) {
	document.write("Крыса");
} else if (year % cycle === 5) {
	document.write("Бык");
} else if (year % cycle === 6) {
	document.write("Тигр");
} else if (year % cycle === 7) {
	document.write("Кролик");
} else if (year % cycle === 8) {
	document.write("Дракон");
} else if (year % cycle === 9) {
	document.write("Змея");
} else if (year % cycle === 10) {
	document.write("Лошадь");
} else if (year % cycle === 11) {
	document.write("Коза");
} else {
	document.write("Нет такого года");
}