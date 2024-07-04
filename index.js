const dateElement = document.getElementById('date');
const timeElement = document.getElementById('time');

function updateDateTime() {
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();

    dateElement.textContent = date;
    timeElement.textContent = time;
}
function showSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex'
}
function hideSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none'
}

updateDateTime(); // initial update
setInterval(updateDateTime, 1000); // update every 1 second