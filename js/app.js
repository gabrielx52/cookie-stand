'use strict';

var firstPike = {
  store: '1st and Pike',
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
      var hourTotal = Math.floor(this.avgCookPH * this.randomCust());
      this.salesReport.push(this.hoursOfOp[i] + ': ' + hourTotal + ' cookies');
      this.totalSold += hourTotal;
    }
  },
  finalReportCreator: function() {
    this.salesReport.push(this.store);
    this.dailySalesGen();
    this.salesReport.push('Total: ' + this.totalSold);
  }
};

var seaTac = {
  store: 'SeaTac Airport',
  minCust: 3,
  maxCust: 24,
  avgCookPH: 1.2,
  hoursOfOp: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  totalSold: 0,
  salesReport: [],
  randomCust: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  },
  dailySalesGen: function() {
    for(var i = 0; i < this.hoursOfOp.length; i++) {
      var hourTotal = Math.floor(this.avgCookPH * this.randomCust());
      this.salesReport.push(this.hoursOfOp[i] + ': ' + hourTotal + ' cookies');
      this.totalSold += hourTotal;
    }
  },
  finalReportCreator: function() {
    this.salesReport.push(this.store);
    this.dailySalesGen();
    this.salesReport.push('Total: ' + this.totalSold);
  }
};

var seaCenter = {
  store: 'Seattle Center',
  minCust: 11,
  maxCust: 38,
  avgCookPH: 3.7,
  hoursOfOp: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  totalSold: 0,
  salesReport: [],
  randomCust: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  },
  dailySalesGen: function() {
    for(var i = 0; i < this.hoursOfOp.length; i++) {
      var hourTotal = Math.floor(this.avgCookPH * this.randomCust());
      this.salesReport.push(this.hoursOfOp[i] + ': ' + hourTotal + ' cookies');
      this.totalSold += hourTotal;
    }
  },
  finalReportCreator: function() {
    this.salesReport.push(this.store);
    this.dailySalesGen();
    this.salesReport.push('Total: ' + this.totalSold);
  }
};

var capHill = {
  store: 'Capitol Hill',
  minCust: 20,
  maxCust: 38,
  avgCookPH: 2.3,
  hoursOfOp: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  totalSold: 0,
  salesReport: [],
  randomCust: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  },
  dailySalesGen: function() {
    for(var i = 0; i < this.hoursOfOp.length; i++) {
      var hourTotal = Math.floor(this.avgCookPH * this.randomCust());
      this.salesReport.push(this.hoursOfOp[i] + ': ' + hourTotal + ' cookies');
      this.totalSold += hourTotal;
    }
  },
  finalReportCreator: function() {
    this.salesReport.push(this.store);
    this.dailySalesGen();
    this.salesReport.push('Total: ' + this.totalSold);
  }
};

var alki = {
  store: 'Alki',
  minCust: 2,
  maxCust: 16,
  avgCookPH: 4.6,
  hoursOfOp: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  totalSold: 0,
  salesReport: [],
  randomCust: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  },
  dailySalesGen: function() {
    for(var i = 0; i < this.hoursOfOp.length; i++) {
      var hourTotal = Math.floor(this.avgCookPH * this.randomCust());
      this.salesReport.push(this.hoursOfOp[i] + ': ' + hourTotal + ' cookies');
      this.totalSold += hourTotal;
    }
  },
  finalReportCreator: function() {
    this.salesReport.push(this.store);
    this.dailySalesGen();
    this.salesReport.push('Total: ' + this.totalSold);
  }
};

firstPike.finalReportCreator();

var cont = document.getElementById('salesContent');
var newList = document.createElement('ul');
cont.appendChild(newList);
newList.className = 'unList';
for (var i = 0; i < firstPike.salesReport.length; i++) {
  var newLi = document.createElement('li');
  newLi.innerText = firstPike.salesReport[i];
  newList.appendChild(newLi);
}

seaTac.finalReportCreator();

var cont = document.getElementById('salesContent');
var newList = document.createElement('ul');
cont.appendChild(newList);
newList.className = 'unList';
for (var i = 0; i < seaTac.salesReport.length; i++) {
  var newLi = document.createElement('li');
  newLi.innerText = seaTac.salesReport[i];
  newList.appendChild(newLi);
}

seaCenter.finalReportCreator();

var cont = document.getElementById('salesContent');
var newList = document.createElement('ul');
cont.appendChild(newList);
newList.className = 'unList';
for (var i = 0; i < seaCenter.salesReport.length; i++) {
  var newLi = document.createElement('li');
  newLi.innerText = seaCenter.salesReport[i];
  newList.appendChild(newLi);
}

capHill.finalReportCreator();

var cont = document.getElementById('salesContent');
var newList = document.createElement('ul');
cont.appendChild(newList);
newList.className = 'unList';
for (var i = 0; i < capHill.salesReport.length; i++) {
  var newLi = document.createElement('li');
  newLi.innerText = capHill.salesReport[i];
  newList.appendChild(newLi);
}

alki.finalReportCreator();

var cont = document.getElementById('salesContent');
var newList = document.createElement('ul');
cont.appendChild(newList);
newList.className = 'unList';
for (var i = 0; i < alki.salesReport.length; i++) {
  var newLi = document.createElement('li');
  newLi.innerText = alki.salesReport[i];
  newList.appendChild(newLi);
}
