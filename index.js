const socialContainer = document.querySelector('.social-container');
const paragraph = document.getElementById('label');
const socialLinks = document.querySelectorAll('.facebook');
const clikableDiv = document.querySelector('.label');

clikableDiv.addEventListener('click', ()=>{
socialContainer.classList.toggle('show');
});

socialLinks.forEach((link)=>{
    link.addEventListener('click', ()=>{
        paragraph.innerHTML = link.innerHTML;
    })
})