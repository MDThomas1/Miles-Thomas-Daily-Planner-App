var timer = moment()
var saveBtn = document.querySelectorAll('.saveBtn')
var plans = document.querySelectorAll('textarea')
var hourTag = document.querySelectorAll('.hour')

saveBtn.on('click', function saveEvents() {
    var saved = localStorage.setItem(plans);
    $('textarea').text(localStorage.getItem('activity', saved))  
});

$('#currentDay').text(timer.format("[Today is ] dddd, MMM Do, YYYY"))

function ppf() {

}