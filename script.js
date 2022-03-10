var currentDayEl = $("#currentDay");
var nineAM = $("#9AM");
var tenAM = $("#10AM");
var elevenAM = $("#11AM");
var twelvePM = $("#12PM");
var onePM = $("#1PM");
var twoPM = $("#2PM");
var threePM = $("#3PM");
var fourPM = $("#4PM");
var fivePM = $("#5PM");
var saveBtn = $(".saveBtn");

function displayDate() {
  var rightNow = moment().format("dddd, MMMM Do");

  currentDayEl.text(rightNow);
}

function setInfo() {
  localStorage.setItem("9AM", nineAM.val());
  localStorage.setItem("10AM", tenAM.val());
  localStorage.setItem("11AM", elevenAM.val());
  localStorage.setItem("12PM", twelvePM.val());
  localStorage.setItem("1PM", onePM.val());
  localStorage.setItem("2PM", twoPM.val());
  localStorage.setItem("3PM", threePM.val());
  localStorage.setItem("4PM", fourPM.val());
  localStorage.setItem("5PM", fivePM.val());
}

function getInfo() {
  var info9a = localStorage.getItem("9AM");
  var info10a = localStorage.getItem("10AM");
  var info11a = localStorage.getItem("11AM");
  var info12p = localStorage.getItem("12PM");
  var info1p = localStorage.getItem("1PM");
  var info2p = localStorage.getItem("2PM");
  var info3p = localStorage.getItem("3PM");
  var info4p = localStorage.getItem("4PM");
  var info5p = localStorage.getItem("5PM");

  nineAM.text(info9a);
  tenAM.text(info10a);
  elevenAM.text(info11a);
  twelvePM.text(info12p);
  onePM.text(info1p);
  twoPM.text(info2p);
  threePM.text(info3p);
  fourPM.text(info4p);
  fivePM.text(info5p);
}

function timeChecker(hour) {
  var rightNow = moment().format("HH");

  var time = hour.data("index");

  if (time > rightNow) {
    $(hour).addClass("future");
  } else if (time == rightNow) {
    $(hour).addClass("present");
  } else if (time < rightNow) {
    $(hour).addClass("past");
  }
}

setInterval(() => {
  displayDate();
}, 60000);

setInterval(() => {
  timeChecker(nineAM);
  timeChecker(tenAM);
  timeChecker(elevenAM);
  timeChecker(twelvePM);
  timeChecker(onePM);
  timeChecker(twoPM);
  timeChecker(threePM);
  timeChecker(fourPM);
  timeChecker(fivePM);
}, 60000);

getInfo();
displayDate();
timeChecker(nineAM);
timeChecker(tenAM);
timeChecker(elevenAM);
timeChecker(twelvePM);
timeChecker(onePM);
timeChecker(twoPM);
timeChecker(threePM);
timeChecker(fourPM);
timeChecker(fivePM);

saveBtn.on("click", function () {
  setInfo();
});
