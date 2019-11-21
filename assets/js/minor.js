var today = new Date(+new Date + 12096e5);
var date = (today.getMonth()+1) + '/' + today.getDate() + '/' + today.getFullYear()

document.getElementById('event-date').value = date;