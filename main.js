const form = document.querySelector('form');
const input = document.querySelector('input');
const foundTitle = document.querySelector(".text span");
const ul = document.querySelector('ul');
const taskNumber = document.querySelector('h1 span');
let liElements = document.getElementsByClassName('task');

const removeTask = (e)=>{
e.target.parentNode.remove();
taskNumber.textContent = liElements.length;
}

const addList = (e)=>{
e.preventDefault();
if(input.value === "") return;
li = document.createElement('li');
li.className = "task";
li.innerHTML = input.value + "<button>Usuń</button>";
ul.appendChild(li);
input.value = "";
taskNumber.textContent = liElements.length;
li.querySelector('button').addEventListener('click', removeTask);
}

const searchText = ()=>{
    let li = [...document.querySelectorAll('li')];
    let text = input.value.toLowerCase();
    li = li.filter(element => element.textContent.toLowerCase().includes(text));
    li.forEach(list=> {
        foundTitle.appendChild(list);
    })
    }
form.addEventListener('submit', addList);
input.addEventListener('input', searchText);