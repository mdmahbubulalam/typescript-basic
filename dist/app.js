"use strict";
let age = 14;
age = 20;
let footballClub = 'Chelsea';
console.log(footballClub);
const isFamous = false;
let famous = true;

function add(num1, num2) {
    return num1 + ' ' + num2;
}
add('Limon', 21);

function fullName(firstName, lastName) {
    return firstName + ' ' + lastName;
}
const user = fullName('Limon', 'Alam');

function doubleIt(num) {
    const result = num * 2;
    console.log(result);
}
const output = doubleIt(2);
const multiply = (x, y) => x * y;
console.log(multiply(24, 2));
//ekhane multiply2 name kono function declare kora hoyni, er vitore type ta declare kora hoiche.
let multiply2;
multiply2 = (x, y) => x * y;
console.log(multiply2(3, 2));
//array
const numbers = [2, 3, 4, 5, 7, 3, 88, 12, 90];
numbers.push(22);
const friends = ['Goni', 'Jeff', 'Bill', 'Limon'];
let megaFriend = '';
for (let i = 0; i < friends.length; i++) {
    const friend = friends[i];
    if (friend.length > megaFriend.length) {
        megaFriend = friend;
    }
}
console.log('Longest Name: ', megaFriend);
//object
//object structure
let player;
//object value
player = {
    club: 'Chelsea',
    Salary: 230000
};
//or
let players = {
    club: 'Chelsea',
    Salary: 230000
};
const messi = {
    name: 'Linonel Messi',
    club: 'Barcelona',
    salary: 4500000,
    wife: 'Antonela Roccuzzo',
    isPlaying: true
};
const hakim = {
    name: 'Hakim Ziyech',
    club: 'Chelsea',
    salary: 1200000,
    isPlaying: true
};

function getBonus(player) {
    return player.salary * .2;
}
const bonus = getBonus({
    salary: 200
});
console.log(bonus);

function addition(player, friends) {}
addition(messi, ['Sam']);
class Person {
    constructor(name, father) {
        this.name = name;
        this._partner = name;
        this.fatherName = father;
    }
    getName() {
        return this.name + ' ' + this._partner;
    }
}
const sam = new Person('Samual', 'David');
console.log(sam.name, sam.fatherName);
const samName = sam.getName();
sam.name = 'ben';
console.log(sam);