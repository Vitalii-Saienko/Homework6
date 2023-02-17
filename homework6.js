console.log("Напишите цикл for, который выводит консоль каждое второе число от 0 до 10:");
for (let index = 1; index <= 10; index+=2) {
    console.log(index);
}

console.log("Напишите цикл for, который выводит в консоль  все числа от 55 до 20:");
for (let index = 55; index >=20; index--) {
    console.log(index);
}

console.log("Дан массив numbers. Вывести в консоль все числа из массива const numbers = [3, 5, 11, 2, 8, 1, 6]: ");
const numbers = [3, 5, 11, 2, 8, 1, 6];
for (let index = 0; index < numbers.length; index++) {
    console.log(numbers[index]);
}

console.log("Сформировать новый массив numberssquared и передать в него все элементы из массива numbers, возведенные в квадрат:");
const numberssquared = [];
for (let index = 0; index < numbers.length; index++) {
    numberssquared[index] = numbers[index]**2;
}
console.log(numberssquared);

console.log("Создать переменную lastelem и передать в нее последний элемент из сформированного массива numbers_squared (обратиться к элементу массива по индексу):");
const lastElement = numberssquared[numberssquared.length-1];
console.log("Last element in numbers squared is "+lastElement);

console.log("last task: Дан объект user. Используя данные из объекта, сформировать строку в формате: ‘User’s name is  . He is  years old’");
/* 
Дан объект user. Используя данные из объекта, сформировать строку в формате: ‘User’s name is  . He is  years old’
const user = {
firstname: 'Ivan', 
lastname: 'Ivanov', 
age: 20, 
salary: 500
} */
const user = {
    firstname: 'Ivan', 
    lastname: 'Ivanov', 
    age: 20, 
    salary: 500
    } 
const ourString = `User's name is ${user.firstname}. He is ${user.age} years old.`
console.log(ourString);