var currentDayEl = $("#currentDay");
var nineAMinput = $("#9AM");
var tenAMinput = $("#10AM");
var elevenAMinput = $("#11AM");
var twelvePMinput = $("#12PM");
var onePMinput = $("#1PM");
var twoPMinput = $("#2PM");
var threePMinput = $("#3PM");
var fourPMinput = $("#4PM");
var fivePMinput = $("#5PM");
var saveBtn = $(".saveBtn");

function displayDate() {
  var rightNow = moment().format("dddd, MMMM Do");

  currentDayEl.text(rightNow);
}

setInterval(() => {
  displayDate();
}, 1000);

function setInfo() {
  localStorage.setItem("9AM", nineAMinput.val());
  localStorage.setItem("10AM", tenAMinput.val());
  localStorage.setItem("11AM", elevenAMinput.val());
  localStorage.setItem("12PM", twelvePMinput.val());
  localStorage.setItem("1PM", onePMinput.val());
  localStorage.setItem("2PM", twoPMinput.val());
  localStorage.setItem("3PM", threePMinput.val());
  localStorage.setItem("4PM", fourPMinput.val());
  localStorage.setItem("5PM", fivePMinput.val());
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

  nineAMinput.text(info9a);
  tenAMinput.text(info10a);
  elevenAMinput.text(info11a);
  twelvePMinput.text(info12p);
  onePMinput.text(info1p);
  twoPMinput.text(info2p);
  threePMinput.text(info3p);
  fourPMinput.text(info4p);
  fivePMinput.text(info5p);
}

getInfo();

saveBtn.on("click", function () {
  setInfo();
});

function timeChecker() {
  var rightNow = moment().format("HH");
}
