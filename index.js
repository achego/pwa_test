let me = { name: "Belema", age: "200" };
let you = ['orange', 'apple', 'grape'];
let myString  = new String('MyName');

let belema = {
    name :function() {console.log(this.firstName)},
    firstName: 'Josh',
    lastName: 'Bels',
}


belema.name()
// console.log(navigator);



// console.log('valueOf' in myString);
// console.log(me);

// if (10 in you) {
//   console.log("Mine worked");
// } else {
//   console.log("Didnt worked");
// }
// if ("serviceWorkers" in navigator) {
//   console.log("Worker Found");
// } else {
//   console.log("Worker Not Found");
// }

// console.log(self);
// console.log(document);
// console.log(window);

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./serviceWorker.js')
    console.log('Service worker registered');

}
