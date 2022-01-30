//Boyukden kiciye siralamag methodu
let arr = [10, 23, 7, 4, 8];

let array = arr.sort(function (a, b) {return b - a});

console.log(array);



//Aylari nomrelemek methodu
let month = ["January", "February", "March", "April"];
let monthNums = month.map(monthNumbering)
console.log(monthNums);

function monthNumbering(arr, i) {
    let monthNumber = i + 1;
    let result = arr + "-" + monthNumber;
    return result;
}


let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
getMonthName = function (date, fullName) {
    let monthName = months[date.getMonth()]
    return fullName ? monthName : monthName.substring(0, 3);
}

console.log("Current Month is:", getMonthName(new Date(), true));



//Herflerin sayi methodu
let sentence = "Salam olsun hamiya";
console.log(letterCount(sentence));

function letterCount(str) {
    let chars = str.split(' ');
    let result = chars.map(m => (m.length));
    return result;
}
