'use strict';

var hoursOfOp = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function CookieShop(name, minCust, maxCust, avgCookPerPerson){
  this.name = name,
  this.minCust = minCust,
  this.maxCust = maxCust,
  this.avgCookPerPerson = avgCookPerPerson,
  this.totalSold = 0,
  this.salesReport = [],
  this.randomCust = function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  },
  this.dailySalesGen = function() {
    this.salesReport = [];
    for(var i = 0; i < hoursOfOp.length; i++) {
      var hourTotal = Math.floor(this.avgCookPerPerson * this.randomCust());
      this.salesReport.push(hoursOfOp[i] + ': ' + hourTotal + ' cookies');
      this.totalSold += hourTotal;
    }
  },
  this.dailyFinalReportPublisher = function() {
    this.dailySalesGen();
    var cont = document.getElementById('salesContent');
    var storeHeader = document.createElement('h2');
    storeHeader.innerText = this.name;
    cont.appendChild(storeHeader);
    var newList = document.createElement('ul');
    cont.appendChild(newList);
    newList.className = 'unList';
    for (var i = 0; i < this.salesReport.length; i++) {
      var newLi = document.createElement('li');
      newLi.innerText = this.salesReport[i];
      newList.appendChild(newLi);
    };
    var dailyTotal = document.createElement('li');
    dailyTotal.innerText = 'Total: ' + this.totalSold + ' cookies';
    newList.appendChild(dailyTotal);
  };
};

var pike = new CookieShop('1st and Pike', 23, 65, 6.3);
var seaTac = new CookieShop('SeaTac Airport', 2, 24, 1.2);
var seaCenter = new CookieShop('Seattle Center', 11, 38, 3.7);
var capHill = new CookieShop('Capitol Hill', 20, 38, 2.3);
var alki = new CookieShop('Alki', 2, 16, 4.6);

var shops = [pike, seaTac, seaCenter, capHill, alki];

for (var i = 0; i < shops.length; i++) {
  shops[i].dailyFinalReportPublisher();
}
