let darkMode =true
const buttonToggle =document.getElementById('toggle-mode')

buttonToggle.addEventListener('click',(vent) =>{
  document.documentElement.classList.toggle('light')
  const mode = darkMode ? 'light' : 'dark '
  Event.currentTarget.querySelector ('span').textContent='${mode} modeativado!'
  darkModdddddddde = !darkMode
})