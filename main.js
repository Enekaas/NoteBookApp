const ul = document.querySelector('.list-group')
let input = document.querySelector('input')
const ln = document.querySelector('.last-note')
const cardHeader = document.querySelector('.card-header')
const cardText = document.querySelector('.card-text')
let date = new Date().toLocaleString()
cardText.innerText = Date()
cardHeader.innerText += ` | ${date}`

function addNote(){
  localStorage.setItem('notes',input.value)
  ul.innerHTML += `<li class="list-group-item">${input.value}</li>`
  input.value = ''
}

if (localStorage.getItem('notes') !== null){
  ln.innerText = 'Your last note:'
  ul.innerHTML += `<li class="list-group-item">${localStorage.getItem('notes')}</li>`;
} else {
  ln.innterText = "You Haven't any note"
}