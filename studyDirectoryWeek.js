let w = 0, h = 0;
const image = new Image();

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const months = ["January", "February", "March", "April", "May", "June", "July",
              "August", "September", "October", "November", "December"];

const startOfTermText = "Week 1 starts on Monday 9th September";

const weekStarts = ["2019-09-09", "2019-09-16", "2019-09-23", "2019-09-30", "2019-10-07",
                    "2019-10-14", "2019-10-21", "2019-11-04", "2019-11-11", "2019-11-18",
                    "2019-11-25", "2019-12-02", "2019-12-09", "2019-12-16", "2020-01-06",
                    "2020-01-13", "2020-01-20", "2020-01-27", "2020-02-03", "2020-02-10",
                    "2020-02-24", "2020-03-02", "2020-03-09", "2020-03-16", "2020-03-23",
                    "2020-03-30", "2020-04-20", "2020-04-27", "2020-05-04", "2020-05-11",
                    "2020-05-18", "2020-06-01", "2020-06-08", "2020-06-15", "2020-06-22",
                    "2020-06-29", "2020-07-06"];

const endOfYear = "2020-07-09";

function pageLoad() {

    window.addEventListener("resize", render);
    render();

}

function render() {

    w = window.innerWidth;
    h = window.innerHeight;
    const canvas = document.getElementById('studyDirectoryWeekCanvas');
    canvas.width = w;
    canvas.height = h;

    console.log(w);

    const context = canvas.getContext('2d');

    context.fillStyle = '#e8e7e9';
    context.fillRect(0,0,w,h);

    context.fillStyle = '#55366b';
    context.textBaseline = "top";
    context.textAlign = "end";

    let date = new Date();

    let d = date.getDate();
    let m = date.getMonth();
    let y = date.getFullYear();
    let suffix = "th";
    if (d % 10 == 1 && d != 11) suffix = "st";
    if (d % 10 == 2 && d != 12) suffix = "nd";
    if (d % 10 == 3 && d != 13) suffix = "rd";

    let shortDate = `${y}-${m + 1 < 10 ? "0" + (m + 1): m + 1}-${d < 10 ? "0" + d : d}`;

    week = 0;
    for (let weekStart of weekStarts) {
      if (weekStart > shortDate) break;
      week++;
    }

    let dy, dm, dd;

    let lastWeek = weekStarts[week-1];
    if (lastWeek !== undefined) {
      dy = Number(lastWeek.substring(0, 4));
      dm = Number(lastWeek.substring(5, 7)) - 1;
      dd = Number(lastWeek.substring(8, 10));
    }
    let lastDate = new Date(dy, dm, dd);
    let tPlus = Math.ceil((date - lastDate) / (1000 * 3600 * 24));

    let nextWeek = weekStarts[week];
    if (nextWeek !== undefined) {
      dy = Number(nextWeek.substring(0, 4));
      dm = Number(nextWeek.substring(5, 7)) - 1;
      dd = Number(nextWeek.substring(8, 10));
    }
    let nextDate = new Date(dy, dm, dd);
    let tMinus = Math.ceil((nextDate - date) / (1000 * 3600 * 24));

    if (week == 0) {
      context.font = '24px "Roboto Slab,serif"';
      context.fillText(`${days[date.getDay()]} ${d}${suffix} ${months[m]} (${startOfTermText})`, w-10, 0);
    } else if (shortDate > endOfYear) {
      context.font = '32px "Roboto Slab,serif"';
      context.fillText(`${days[date.getDay()]} ${d}${suffix} ${months[m]} (Summer holiday)`, w-10, 0);
    } else if (date.getDay() == 0 || date.getDay() == 6 || tPlus > 5) {
      context.font = '24px "Roboto Slab,serif"';
      context.fillText(`${days[date.getDay()]} ${d}${suffix} ${months[m]} (Week ${week + 1} starts ${tMinus == 1 ? "tomorrow" : "in " + tMinus + " days"})`, w-10, 0);
    } else {
      context.font = '32px "Roboto Slab,serif"';
      context.fillText(`${days[date.getDay()]} ${d}${suffix} ${months[m]} (Week ${week})`, w-10, 0);
    }

}
