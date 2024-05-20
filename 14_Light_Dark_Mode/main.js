const changeThemeBtn = document.querySelector('.change-theme-btn')
const body = document.querySelector('body')
const h1 = document.querySelector('h1');

changeThemeBtn.addEventListener('click', ()=> {
    if(body.classList.contains('light')){
        body.classList.remove('light');
        body.classList.add('dark');
        h1.style.color = 'yellow';

    } else {
        body.classList.remove('dark');
        body.classList.add('light');
        h1.style.color = 'black'; 
    }
})