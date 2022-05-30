function getTimeRemaining(endtime) {
  const total = Date.parse(endtime) - Date.parse(new Date());
  // const seconds = Math.floor((total / 1000) % 60);
  // const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  
  return {
    total,
    days,
    hours,
    // minutes,
    // seconds
  };
}

function initializeClock(id, endtime) {
  const clock = document.getElementById(id);
  const daysSpan = clock.querySelector('.days');
  const hoursSpan = clock.querySelector('.hours');
  // const minutesSpan = clock.querySelector('.minutes');
  // const secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    const t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    // minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    // secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  const timeinterval = setInterval(updateClock, 10000);
}

// Create a new date variable for every new talk.
const deadline1 = new Date(Date.parse("07 June 2022 17:00:00 GMT"))
initializeClock('clock_tom', deadline1);

const deadline2 = new Date(Date.parse("14 June 2022 17:00:00 GMT"))
initializeClock('clock_bo', deadline2);

const deadline3 = new Date(Date.parse("21 June 2022 17:00:00 GMT"))
initializeClock('clock_ben', deadline3);

const deadline4 = new Date(Date.parse("05 July 2022 17:00:00 GMT"))
initializeClock('clock_alex', deadline4);