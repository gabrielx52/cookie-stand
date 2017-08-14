var firstPike = {
  minCust: 23,
  maxCust: 65,
  avgCookPH: 6.3,
  hoursOfOp: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  totalSold: 0,
  salesReport: [],
  randomCust: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  },
  dailySalesGen: function() {
    for(var i = 0; i < this.hoursOfOp.length; i++) {
      this.salesReport.push(this.hoursOfOp[i] + ': ' + this.randomCust() + ' cookies');
      console.log(this.salesReport);
    }
  }
};

firstPike.dailySalesGen();

var body = document.getElementsByTagName('body')[0];
var newList = document.createElement('ul');
body.appendChild(newList);
newList.className = 'unList';

for (var i = 0; i < firstPike.salesReport.length; i++) {
  var newLi = document.createElement('li');
  newLi.innerText = firstPike.salesReport[i];
  newList.appendChild(newLi);
}

// var seaTac = {
//   minCust: 3,
//   maxCust: 24,
//   avgCookPH: 1.2,
//   hoursOfOp: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
//   totalSold: 0,
//   randomCust: function() {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
//   }
// };
//
// var seaCenter = {
//   minCust: 11,
//   maxCust: 38,
//   avgCookPH: 3.7,
//   hoursOfOp: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
//   totalSold: 0,
//   randomCust: function() {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
//   }
// };
//
// var capHill = {
//   minCust: 20,
//   maxCust: 38,
//   avgCookPH: 2.3,
//   hoursOfOp: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
//   totalSold: 0,
//   randomCust: function() {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
//   }
// };
//
// var alki = {
//   minCust: 2,
//   maxCust: 16,
//   avgCookPH: 4.6,
//   hoursOfOp: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
//   totalSold: 0,
//   randomCust: function() {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
//   }
// };
