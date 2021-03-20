const ul = document.querySelector('.list-group')
let input = document.querySelector('input')
const cardHeader = document.querySelector('.card-header')
const cardText = document.querySelector('.card-text')
setInterval(() => {
cardText.innerText = new Date().toLocaleString()
cardHeader.innerText += ` | ${new Date().toLocaleString()}`
},1000);

function addNote(){
  localStorage.setItem('notes',input.value)
  ul.innerHTML = `<li class="list-group-item">${input.value}</li>`
  input.value = ''
}
ul.innerHTML += `<li class="list-group-item">${localStorage.getItem('notes') || 'شما هیچ یادداشتی ندارید'}</li>`;
