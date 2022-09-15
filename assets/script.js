var timer = moment()
var saveBtn = $('.saveBtn')
var hourTag = $('.hour')

var nineAct = $('textarea[name="9amAct"]')
var tenAct = $('textarea[name="10amAct"]')
var elevenAct = $('textarea[name="11amAct"]')
var twelveAct = $('textarea[name="12pmAct"]')
var oneAct = $('textarea[name="1pmAct"]')
var twoAct = $('textarea[name="2pmAct"]')
var threeAct = $('textarea[name="3pmAct"]')
var fourAct = $('textarea[name="4pmAct"]')
var fiveAct = $('textarea[name="5pmAct"]')

nineAct.val(localStorage.getItem('9am Activity'));
tenAct.val(localStorage.getItem('10am Activity'));
elevenAct.val(localStorage.getItem('11am Activity'));
twelveAct.val(localStorage.getItem('12pm Activity'));
oneAct.val(localStorage.getItem('1pm Activity'));
twoAct.val(localStorage.getItem('2pm Activity'));
threeAct.val(localStorage.getItem('3pm Activity'));
fourAct.val(localStorage.getItem('4pm Activity'));
fiveAct.val(localStorage.getItem('5pm Activity'));

$('#currentDay').text(timer.format("[Today is ] dddd, MMM Do, YYYY"))

function saveEvents9am() {
    var actionNine = nineAct.val()
    if (actionNine != null) { 
        localStorage.setItem('9am Activity', actionNine);
    } else {
        localStorage.removeItem('9am Activity');
    }
};

function saveEvents10am() {
    var actionTen = tenAct.val()
    if (actionTen != null) { 
        localStorage.setItem('10am Activity', actionTen);
    } else {
        localStorage.removeItem('10am Activity');
    }
};

function saveEvents11am() {
    var actionEleven = elevenAct.val()
    if (actionEleven != null) { 
        localStorage.setItem('11am Activity', actionEleven);
    } else {
        localStorage.removeItem('11am Activity');
    }
};

function saveEvents12pm() {
    var actionTwelve = twelveAct.val()
    if (actionTwelve != null) { 
        localStorage.setItem('12pm Activity', actionTwelve);
    } else {
        localStorage.removeItem('12pm Activity');
    }
};

function saveEvents1pm() {
    var actionOne = oneAct.val()
    if (actionOne != null) { 
        localStorage.setItem('1pm Activity', actionOne);
    } else {
        localStorage.removeItem('Activity');
    }
};

function saveEvents2pm() {
    var actionTwo = twoAct.val()
    if (actionTwo != null) { 
        localStorage.setItem('2pm Activity', actionTwo);
    } else {
        localStorage.removeItem('2pm Activity');
    }
};

function saveEvents3pm() {
    var actionThree = threeAct.val()
    if (actionThree != null) { 
        localStorage.setItem('3pm Activity', actionThree);
    } else {
        localStorage.removeItem('3pm Activity');
    }
};

function saveEvents4pm() {
    var actionFour = fourAct.val()
    if (actionFour != null) { 
        localStorage.setItem('4pm Activity', actionFour);
    } else {
        localStorage.removeItem('4pm Activity');
    }
};

function saveEvents5pm() {
    var actionFive = fiveAct.val()
    if (actionFive != null) { 
        localStorage.setItem('5pm Activity', actionFive);
    } else {
        localStorage.removeItem('5pm Activity');
    }
};


/*function ppf() {
    if () {

    } else if () {

    } else if () {

    }
}*/