// Typescript Array
let cities: Array<string | number> = ["Bandung", "Jogja", "Padang"];

cities[1] = "Solo";
cities.push(88);

console.log(cities);

//end of typescript array

// Typescript Object and Interface
interface ProductInterface {
    name: string;
    price?: number;
    onSale: boolean;
}

const Product: ProductInterface = {
    name: "Banana",
    price: 4000,
    onSale: false,
};

console.log(Product);

//end of typescript object and interface

//Typescript Enum
enum TicketStatusEnum {
    Closed,
    Open,
    InProgress,
}

interface TicketInterface {
    title: string;
    status: TicketStatusEnum;
}

const Ticket: TicketInterface = {
    title: "an issue",
    status: TicketStatusEnum.Open,
};

console.log(Ticket);

//end of typescript enum

//Typescript Generic Types
const Book = {
    title: "a title",
    author: "the author",
    published_year: 2010,
};

const Room = {
    bed: true,
    toilet: true,
    ac: true,
};

function save<T>(item: T): T {
    return item;
}

const item = save(Book);

console.log(item.author);

//end of typescript generic types

//Typescript Generic Constraint
interface PersonInterface {
    first_name: string;
    last_name: string;
}

class Person implements PersonInterface {
    first_name: string;
    last_name: string;

    constructor(fname: string, lname: string) {
        this.first_name = fname;
        this.last_name = lname;
    }
}

function display<T extends Person>(person: T): void {
    console.log(`${person.first_name} ${person.last_name}`);
}

var first_person = new Person("Fajar", "Pratama");
display(first_person);

//end of typescript generic constraint

//Typescript Conditional Statement
const age = 14;

if (age >= 17) {
    console.log("Cukup Umur");
} else {
    console.log("Belum Cukup Umur");
}

const score = 40;

if (score >= 90) {
    console.log("A");
} else if (score >= 80) {
    console.log("B");
} else if (score >= 70) {
    console.log('C');
} else {
    console.log('D');
}

// end of typescript conditional statement

//Typescript Looping
//Using for
for (let index = 0; index < 10; index++) {
    console.log(index);

}
//end using for

//using for of
const days = [
    'senin',
    'selasa',
    'rabu',
    'kamis',
    'jumat',
    'sabtu',
    'minggu'
]

for (const day of days) {
    console.log(day);
}
//end using for of

//using for in
const user = {
    id: 1,
    username: 'pandora',
    name: 'Fajar Pratama'
}

for (const item in user) {
    console.log(user[item]);
}
//end using for in
//end of typescript looping

export { };
