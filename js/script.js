let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}

document.getElementById('scroll-down').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default anchor behavior
    document.querySelector('#tidbits').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});