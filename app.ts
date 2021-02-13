let age: number = 14;
age = 20;

let footballClub: string = 'Chelsea';
console.log(footballClub);

const isFamous: boolean = false;
let famous: boolean = true;

function add(num1: number | string, num2: number) {
    return num1 + ' ' + num2;
}

add('Limon', 21);

function fullName(firstName: string, lastName: string): string {
    return firstName + ' ' + lastName;
}
const user: string = fullName('Limon', 'Alam');

function doubleIt(num: number): void {
    const result = num * 2;
    console.log(result);
}

const output = doubleIt(2);

const multiply = (x: number, y: number): number => x * y;
console.log(multiply(24, 2));

//ekhane multiply2 name kono function declare kora hoyni, er vitore type ta declare kora hoiche.
let multiply2: (x: number, y: number) => number;
multiply2 = (x, y) => x * y;
console.log(multiply2(3, 2));

//array
const numbers: number[] = [2, 3, 4, 5, 7, 3, 88, 12, 90];
numbers.push(22);

const friends: string[] = ['Goni', 'Jeff', 'Bill', 'Limon'];
let megaFriend: string = ''
for (let i = 0; i < friends.length; i++) {
    const friend: string = friends[i];
    if (friend.length > megaFriend.length) {
        megaFriend = friend;
    }
}
console.log('Longest Name: ', megaFriend);

//object
//object structure
let player: {
    club: string,
    Salary: number
}

//object value
player = {
    club: 'Chelsea',
    Salary: 230000
}

//or

let players: {
    club: string,
    Salary: number
} = {
    club: 'Chelsea',
    Salary: 230000
}

//typescript interface, re use kora jabe
interface Player {
    name: string,
        club: string,
        salary: number,
        wife ? : string, // ? hochche thakte pare, nao thakte pare
        isPlaying: boolean
}

const messi: Player = {
    name: 'Linonel Messi',
    club: 'Barcelona',
    salary: 4500000,
    wife: 'Antonela Roccuzzo',
    isPlaying: true
}

const hakim: Player = {
    name: 'Hakim Ziyech',
    club: 'Chelsea',
    salary: 1200000,
    isPlaying: true
}

function getBonus(player: {
    salary: number
}) {
    return player.salary * .2;
}

const bonus = getBonus({
    salary: 200
});
console.log(bonus);

function addition(player: Player, friends: string[]) {

}

addition(messi, ['Sam']);

class Person {
    name: string;
    private _partner: string;
    readonly fatherName: string
    constructor(name: string, father: string) {
        this.name = name;
        this._partner = name;
        this.fatherName = father;
    }

    getName(): string {
        return this.name + ' ' + this._partner;
    }
}

const sam = new Person('Samual', 'David');
console.log(sam.name, sam.fatherName);
const samName = sam.getName();
sam.name = 'ben';
console.log(sam);