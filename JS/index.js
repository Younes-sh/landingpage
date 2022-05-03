window.scrollTo({top:0,behavior:'smooth'})
const iconRegister = document.querySelector('#iconRegister');
const registerDiv = document.querySelector('.contentRig');

iconRegister.addEventListener('click',()=>{
    registerDiv.classList.toggle('showRegister');
    registerDiv.classList.toggle('disnone')
})