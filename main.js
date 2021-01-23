const ul = document.querySelector('.list-group')
let input = document.querySelector('input')
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
ul.innerHTML += `<li class="list-group-item">${localStorage.getItem('notes')}</li>`;