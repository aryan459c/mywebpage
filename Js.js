const wrapper=document.querySelector('.wrapper');
const ifrmd=document.querySelector('.ifrmd');
const loginLink=document.querySelector('.login-link');
const regLink=document.querySelector('.register-link');
const btnlpop=document.querySelector('.btnLogin-popup');
const iconClose=document.querySelector('.icon-close');

regLink.addEventListener('click',()=>{
    wrapper.classList.add('active');
});

loginLink.addEventListener('click',()=>{
    wrapper.classList.remove('active');
});
regLink.addEventListener('click',()=>{
    wrapper.classList.add('active');
});
btnlpop.addEventListener('click',()=>{
    wrapper.classList.add('active-popup');
    ifrmd.classList.add('active-popup');
});
iconClose.addEventListener('click',()=>{
    wrapper.classList.remove('active-popup');
    ifrmd.classList.remove('active-popup');
});
