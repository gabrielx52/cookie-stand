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
      this.salesReport.push(hourTotal);
      this.totalSold += hourTotal;
    }
  },
  this.render = function() {
    this.dailySalesGen();
    var cont = document.getElementById('header');
    var tableRow = document.createElement('tr');
    cont.appendChild(tableRow);
    var storeHeader = document.createElement('th');
    storeHeader.innerText = this.name;
    tableRow.appendChild(storeHeader);
    for (var i = 0; i < this.salesReport.length; i++) {
      var hour = document.createElement('td');
      hour.innerText = this.salesReport[i];
      tableRow.appendChild(hour);
    };
    var totalCel = document.createElement('td');
    totalCel.innerText = this.totalSold;
    totalCel.setAttribute('class', 'lastCel');
    tableRow.appendChild(totalCel);
  };
};

var headerMaker = function() {
  var cont = document.getElementById('salesContent');
  var tableHeader = document.createElement('table');
  cont.appendChild(tableHeader);
  var tableRow = document.createElement('tr');
  tableRow.setAttribute('id', 'tableHeader');
  tableHeader.appendChild(tableRow);
  var head = document.createElement('th');
  tableHeader.setAttribute('id', 'header');
  tableRow.appendChild(head);
  for (var i = 0; i < hoursOfOp.length; i++) {
    var hour = document.createElement('th');
    hour.innerText = hoursOfOp[i];
    tableRow.appendChild(hour);
  };
  var totalHeadCel = document.createElement('th');
  totalHeadCel.innerText = 'Daily Location Total';
  tableRow.appendChild(totalHeadCel);
};

var footerMaker = function() {
  var anchorPoint = document.getElementById('header');
  var tableRow = document.createElement('tr');
  anchorPoint.appendChild(tableRow);
  var leftCel = document.createElement('th');
  leftCel.innerText = 'Totals';
  tableRow.appendChild(leftCel);
  for (var i = 0; i < hoursOfOp.length; i++) {
    var totalCel = document.createElement('td');
    tableRow.appendChild(totalCel);
  };
  var rightCel = document.createElement('td');
  tableRow.appendChild(rightCel);
};

var pike = new CookieShop('1st and Pike', 23, 65, 6.3);
var seaTac = new CookieShop('SeaTac Airport', 2, 24, 1.2);
var seaCenter = new CookieShop('Seattle Center', 11, 38, 3.7);
var capHill = new CookieShop('Capitol Hill', 20, 38, 2.3);
var alki = new CookieShop('Alki', 2, 16, 4.6);

headerMaker();
pike.render();
seaTac.render();
seaCenter.render();
capHill.render();
alki.render();
footerMaker();
