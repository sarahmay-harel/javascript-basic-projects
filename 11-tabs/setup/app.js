const about = document.querySelector('.about');
const btns = document.querySelectorAll('.tab-btn');
const articles = document.querySelectorAll('.content');

about.addEventListener('click', function(e) {
    console.log(e.target.dataset.id);
    const id = e.target.dataset.id;
    if (id) {
        //remove active class from all buttons
        btns.forEach(function(btn) {
            btn.classList.remove('active');
        });
        //add active class to clicked button
        e.target.classList.add('active');
        //remove active class from all articles
        articles.forEach(function(article) {
            article.classList.remove('active');
        })
        //add active class to content with same id
        const element = document.getElementById(id);
        element.classList.add('active');
    }
})