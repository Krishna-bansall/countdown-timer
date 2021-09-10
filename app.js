now = new Date();
var start = new Date(now.getFullYear(), 0, 0);
var diff = now - start;
var oneDay = 1000 * 60 * 60 * 24;
var day = Math.floor(diff / oneDay);

setInterval(() => {
    date = new Date();
    document.getElementById('days').innerHTML = 365 - day;
    document.getElementById('hours').innerHTML = 24 - date.getHours();
    document.getElementById('minutes').innerHTML = 60 - date.getMinutes();
    document.getElementById('seconds').innerHTML = 60 -  date.getSeconds();
}, 100)

