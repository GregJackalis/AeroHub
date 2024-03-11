
const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const popUpButtons = document.querySelectorAll('#getStarted');
const iconClose = document.querySelector('.icon-close');
const tryYourselfBtn = document.querySelector('.tryBtn');

registerLink.addEventListener('click', ()=> {
  wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
  wrapper.classList.remove('active');
});

popUpButtons.forEach(function(button){

  button.addEventListener('click', function(){

    console.log("pop up button clicked!")
    wrapper.classList.add('active-popup');

  });

});

iconClose.addEventListener('click', ()=> {
  wrapper.classList.remove('active-popup');
});


tryYourselfBtn.addEventListener('click', function(event) {
  event.preventDefault();

  wrapper.classList.add('active-popup');
  wrapper.classList.add('active');
})

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    const linksWithAnimation = document.querySelectorAll('.navBar a, .dropDownMenu a');
    linksWithAnimation.forEach(link => {
      link.style.animation = ''; // Reset animation
    });
  }, 100);
});
    