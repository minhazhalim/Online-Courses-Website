const menuButton = document.getElementById('menu-button');
const menuClose = document.getElementById('menu-close');
const unorderedList = document.querySelector('nav .navigation ul');
menuButton.addEventListener('click',function(){
     unorderedList.classList.add('active');
});
menuClose.addEventListener('click',function(){
     unorderedList.classList.remove('active');
});
const goToCourse = document.getElementById('goToCourse');
goToCourse.addEventListener('click',() => {
     window.location.href = 'inner-courses.html';
});