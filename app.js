const todoInputEl = document.querySelector(".todo__input");
const todoListEl = document.querySelector(".todo__list");
const todoItemEl = document.querySelectorAll(".todo__item");

function addListItem() {
    todoInputEl.addEventListener("keypress", function(e) {
        if (e.keyCode === 13) {
            let newListItem = createListItem(todoInputEl.value);
            todoListEl.insertBefore(newListItem, todoListEl.childNodes[0]);
            todoInputEl.value = "";
        }
    })
}


function completeListItem() {
    todoListEl.addEventListener("click", function(e) {
        if (e.target.classList.contains("todo__item")) {
            e.target.classList.toggle("done");
        }
    })
}

function createListItem(text) {
    const newListEl = document.createElement("li");
    newListEl.textContent = text;
    newListEl.setAttribute("class", "todo__item")
    return newListEl;
}

addListItem();
completeListItem();