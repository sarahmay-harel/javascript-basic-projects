const sidebarToggle = document.querySelector('.sidebar-toggle');
const sidebar = document.querySelector('.sidebar');

sidebarToggle.addEventListener('click', function() {
    sidebar.classList.toggle("show-sidebar");
})

const closeBtn = document.querySelector('.close-btn');

closeBtn.addEventListener('click', function() {
    sidebar.classList.remove("show-sidebar");
});