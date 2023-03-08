const showMenu = (headerToggle, navbarId) => {
    const toggleBtn = document.getElementById(headerToggle);
        nav = document.getElementById(navbarId)

    if (headerToggle && navbarId) {
        toggleBtn.addEventListener('click',() => {
            nav.classList.toggle('show-menu')
            toggleBtn.classList.toggle('fa-times')
        })
    }
}

showMenu('header-toggle', 'navbar')

const linkcolor = document.querySelectorAll('.nav_link');

function colorLink() {
    linkcolor.forEach(1 => 1.classList.remove('active')) 
    this.classList.add('active')
}

linkcolor.forEach(1 => 1.addEventListener('click', colorLink))