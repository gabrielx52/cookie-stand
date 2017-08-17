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
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;

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
    createAppend('th', '', '', this.name, tableRow);
    for (var i = 0; i < this.salesReport.length; i++) {
      createAppend('td', '', '', this.salesReport[i], tableRow);
    };
    createAppend('td', 'lastCel', '', this.totalSold, tableRow);
  };
};

var headerMaker = function() {
  var anchorPoint = document.getElementById('salesContent');
  var tableHeader = createAppend('table', '', 'header', '', anchorPoint);
  var tHead = createAppend('thead', '', '', '', tableHeader);
  var tableRow = createAppend('tr', '', 'tableHeader', '', tHead);
  var head = createAppend('th', '', '', '', tableRow);
  for (var i = 0; i < hoursOfOp.length; i++) {
    var hour = createAppend('th', '', '', hoursOfOp[i], tableRow);
  };
  var totalHeadCel = createAppend('th', '', '', 'Daily Location Total', tableRow);
};

var footerMaker = function() {
  var anchorPoint = document.getElementsByTagName('table')[0];
  var tableRow = createAppend('tr', '', '', '', anchorPoint);
  var leftCel = createAppend('th', '', '', 'Totals', tableRow);
  for (var i = 0; i < hoursOfOp.length; i++) {
    var totalCel = createAppend('td', '', '', '', tableRow);
  };
  var rightCel = createAppend('td', '', '', '', tableRow);
};

function addNewCookieStore(event) {
  event.preventDefault();
  var storeName = form.elements['storeName'].value;
  var minCust = parseInt(form.elements['minCust'].value);
  var maxCust = parseInt(form.elements['maxCust'].value);
  var avgCPH = parseFloat(form.elements['avgCPH'].value);
  var newStore = new CookieShop(storeName, minCust, maxCust, avgCPH);
  newStore.render();
  form.reset();
}

var pike = new CookieShop('1st and Pike', 23, 65, 6.3);
var seaTac = new CookieShop('SeaTac Airport', 2, 24, 1.2);
var seaCenter = new CookieShop('Seattle Center', 11, 38, 3.7);
var capHill = new CookieShop('Capitol Hill', 20, 38, 2.3);
var alki = new CookieShop('Alki', 2, 16, 4.6);

var shopLocations = [alki, capHill, seaCenter, seaTac, pike];

// Work in progress
function createAppend(newElementTag, className, idName, content, parentElement) {
  var newElem = document.createElement(newElementTag);
  if(className && className !== '') {
    newElem.className = className;
  } if (idName && idName !== '') {
    newElem.id = idName;
  }
  newElem.innerText = content;
  parentElement.appendChild(newElem);
  return newElem;
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
