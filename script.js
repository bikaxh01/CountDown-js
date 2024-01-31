const countDownDate = new Date("15 feb 2024 1:00:00").getTime();
console.log(countDownDate);

let DaysComp = document.getElementById("Days");
let HourComp = document.getElementById("hour");
let MinuteComp = document.getElementById("minute");
let SecComp = document.getElementById("second");

let IntervalFun = setInterval(() => {
  let toDayDate = new Date().getTime();
  let Difference = countDownDate - toDayDate;

  let days = Math.floor(Difference / (1000 * 60 * 60 * 24));
  let hours = Math.floor(
    (Difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutes = Math.floor((Difference % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((Difference % (1000 * 60)) / 1000);

  console.log(days, " ", hours, " ", minutes, " ", seconds);

  DaysComp.innerHTML = days;
  HourComp.innerHTML = `:${hours}`;
  MinuteComp.innerHTML = `:${minutes}`;
  SecComp.innerHTML = `:${seconds}`;
}, 1000);
