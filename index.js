"use strict";
exports.__esModule = true;
// Typescript Array
var cities = ["Bandung", "Jogja", "Padang"];
cities[1] = "Solo";
cities.push(88);
console.log(cities);
var Product = {
    name: "Banana",
    price: 4000,
    onSale: false
};
console.log(Product);
//end of typescript object and interface
//Typescript Enum
var TicketStatusEnum;
(function (TicketStatusEnum) {
    TicketStatusEnum[TicketStatusEnum["Closed"] = 0] = "Closed";
    TicketStatusEnum[TicketStatusEnum["Open"] = 1] = "Open";
    TicketStatusEnum[TicketStatusEnum["InProgress"] = 2] = "InProgress";
})(TicketStatusEnum || (TicketStatusEnum = {}));
var Ticket = {
    title: "an issue",
    status: TicketStatusEnum.Open
};
console.log(Ticket);
//end of typescript enum
//Typescript Generic Types
var Book = {
    title: "a title",
    author: "the author",
    published_year: 2010
};
var Room = {
    bed: true,
    toilet: true,
    ac: true
};

function save(item) {
    return item;
}
var item = save(Book);
console.log(item.author);
var Person = /** @class */ (function () {
    function Person(fname, lname) {
        this.first_name = fname;
        this.last_name = lname;
    }
    return Person;
}());

function display(person) {
    console.log(person.first_name + " " + person.last_name);
}
var first_person = new Person("Fajar", "Pratama");
display(first_person);
//end of typescript generic constraint
//Typescript Conditional Statement
var age = 14;
if (age >= 17) {
    console.log("Cukup Umur");
} else {
    console.log("Belum Cukup Umur");
}
var score = 40;
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
for (var index = 0; index < 10; index++) {
    console.log(index);
}
//end using for
//using for of
var days = [
    'senin',
    'selasa',
    'rabu',
    'kamis',
    'jumat',
    'sabtu',
    'minggu'
];
for (var _i = 0, days_1 = days; _i < days_1.length; _i++) {
    var day = days_1[_i];
    console.log(day);
}
//end using for of
//using for in
var user = {
    id: 1,
    username: 'pandora',
    name: 'Fajar Pratama'
};
for (var item_1 in user) {
    console.log(user[item_1]);
}