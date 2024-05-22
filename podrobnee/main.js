const sidebar = document.getElementById('open')
const section = document.getElementById('section')

sidebar.onclick = function(){
    section.classList.remove('open-close')
    section.classList.toggle('activate')
}