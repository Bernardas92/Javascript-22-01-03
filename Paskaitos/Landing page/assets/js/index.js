window.addEventListener('scroll', () => {
const offset = 260
if(window.scrollY >= offset) 
 document.getElementById('navbar').classList.add('scrolled')
else 
    document.getElementById('navbar').classList.remove('scrolled')
})

