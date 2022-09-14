// let a = function() {
//   console.log("Sometimes, syntax isn't intuitive!")
// }();

// var sum = 0;
// var numbers;
//
// sum += 10;
// sum += 31;
//
// numbers = [1, 7, -3, 3];
//
// let total = (function sum(arr) {
//   return arr.reduce(function(sum, number) {
//     sum += number;
//     return sum;
//   }, 0);
// },numbers)
//
// sum += total;  // ?
//
// console.log(sum);
//
// function countdown(n) {
//   (function(n) {
//     for (let i = n; i >= 0; i --) {
//       console.log(i);
//     }
//   })(n);
//   console.log("Done!");
// }
//
// countdown(10);

// (function foo() {
//   console.log('Bar');
// })();
//
// foo() // ?

// function countdown(count) {
//   (function recursiveSub(n) {
//     console.log(n);
//
//     if (n === 0) return;
//     recursiveSub(n-1);
//   })(count);
//   console.log('Done!');
// }
//
// countdown(10);

function sayForecast(day, conditions) {
  console.log('The weather ' + day + ' will be ' + conditions + '.');
}

function bar(day) {
  return function(weather) {
    sayForecast(day, weather);
  };
}

let sundayWeather = bar("Sunday");

sundayWeather('cloudy');
