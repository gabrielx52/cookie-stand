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
    var rando =  Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
    return rando;

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
    cont.insertBefore(tableRow, cont.childNodes[1]);
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
  var anchorPoint = document.getElementById('salesContent');
  var tableHeader = document.createElement('table');
  anchorPoint.appendChild(tableHeader);
  var tHead = document.createElement('thead');
  tableHeader.appendChild(tHead);
  var tableRow = document.createElement('tr');
  tableRow.id = 'tableHeader';
  tHead.appendChild(tableRow);
  var head = document.createElement('th');
  tableHeader.id = 'header';
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
  var anchorPoint = document.getElementsByTagName('table')[0];
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

function addNewCookieStore(event) {
  event.preventDefault();
  var storeName = form.elements['storeName'].value;
  var minCust = parseInt(form.elements['minCust'].value);
  var maxCust = parseInt(form.elements['maxCust'].value);
  console.log(form.elements['avgCPH'].value);
  console.log(typeof form.elements['avgCPH'].value);
  var avgCPH = parseFloat(form.elements['avgCPH'].value);
  console.log(typeof minCust);
  console.log(typeof maxCust);
  console.log(typeof avgCPH);
  console.log(avgCPH);
  var newStore = new CookieShop(storeName, minCust, maxCust, avgCPH);
  newStore.render();
  form.reset();
}

var pike = new CookieShop('1st and Pike', 23, 65, 6.3);
var seaTac = new CookieShop('SeaTac Airport', 2, 24, 1.2);
var seaCenter = new CookieShop('Seattle Center', 11, 38, 3.7);
var capHill = new CookieShop('Capitol Hill', 20, 38, 2.3);
var alki = new CookieShop('Alki', 2, 16, 4.6);

// var shopLocations = [alki, capHill, seaCenter, seaTac, pike];
var shopLocations = [pike];

// Work in progress
var createAndAppend = function(newElementTag, className, idName, content, parentElement) {
  var newElem = document.createElement(newElementTag);
  if(className && className !== '') {
    newElem.className = className;
  } if (idName && idName !== '') {
    newElem.id = idName;
  }
  newElem.innerText = content;
  parentElement.appendChild(newElem);
};
//

var tableMaker = function(locationArray){
  headerMaker();
  for (var i = 0; i < locationArray.length; i++) {
    locationArray[i].render();
  }
  footerMaker();
};

var form = document.getElementById('addStoreForm');
form.addEventListener('submit', addNewCookieStore);

tableMaker(shopLocations);
