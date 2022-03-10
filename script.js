// These variables get various elements from the page and allow me to easily reference them
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

// This function is in charge of setting the date at the top of the page
function displayDate() {
  var rightNow = moment().format("dddd, MMMM Do");

  currentDayEl.text(rightNow);
}

// This function stores every input all at once in local storage so it can be accessed and retrieved later
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

// This function gets all the info stored in local storage and sets the relevant text area to contain that info
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

// This function is in charge of checking a given hour block to see if it is in the past present or future and setting the appropiate class to it
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

// This interval runs the displayDate function every minute, allowing the date to stay accurate
setInterval(() => {
  displayDate();
}, 60000);

// This interval runs the timeChecker function every minute on all the timeblocks to make sure they stay up to date and can actually be relied on
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

// This bunch of calls are all the functions that need to run in order for the page to look how it should on initial load, after this call the heavy lifting shifts to the previous setIntervals to refresh the time on the page every minute to ensure it stays accurate
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

// This onClick is what allows the user to save the information on the page. It works regardless of which save button is actually pressed so even if the user presses the incorrect button their information will still be saved
saveBtn.on("click", function () {
  setInfo();
});
