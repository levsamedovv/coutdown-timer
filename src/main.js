const getTime = () => {
  let now = new Date();
  let day = String(now.getDate()).padStart(2, '0');
  let hour = String(now.getHours()).padStart(2, '0');
  let minute = String(now.getMinutes()).padStart(2, '0');
  let second = String(now.getSeconds()).padStart(2, '0');

  document.getElementById('day').innerHTML = day;
  document.getElementById('hours').innerHTML = hour;
  document.getElementById('minute').innerHTML = minute;
  document.getElementById('second').innerHTML = second;
};

setInterval(getTime, 1000);