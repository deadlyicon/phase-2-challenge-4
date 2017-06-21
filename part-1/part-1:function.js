
//Weekday
function weekday() {
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sun";
    weekday[1] = "Mon";
    weekday[2] = "Tues";
    weekday[3] = "Wed";
    weekday[4] = "Thu";
    weekday[5] = "Fri";
    weekday[6] = "Sat";

    var n = weekday[d.getDay()];

}

//Snippet
function snippet(string, maxlength){
    var shorten= string.indexOf(' ', maxlength);
    if(shorten== -1) return string;
    return string.substring(0, cut)
}
var s= "this is a long string i cant display";
snippet(s, 10)

//number of properties
let friend = {
  name: 'Dominique',
  age: 30,
  phone: '555-555-5555'
}

friend.length;

//filter between
let arr = [1, 2, 3, 4, 5, 6, 7]

filterBetween(arr, 3, 6) // => [3, 4, 5, 6]
filterBetween(arr, 5, 10) // => [5, 6, 7]

function filterBetween(array, min, max)
