const addBtn = document.querySelector('.addBtn')
var inputValue = document.querySelector('.todo-item')
const container = document.querySelector('.container ul')

class item {
    constructor(itemName) {
        this.createUL(itemName)
    }

    createUL(itemName) {
        let input = document.createElement('input')
        input.type = "text"
        input.value = itemName
        input.disabled = true
        input.classList.add('item')

        let itemBox = document.createElement('li')
        itemBox.classList.add('todo-item')

        let editButton = document.createElement('button')
        editButton.innerHTML = '<i class="fas fa-pencil-alt"></i>'
        editButton.classList.add('editBtn')
        
        let deleteButton = document.createElement('button')
        deleteButton.innerHTML = '<i class="far fa-trash-alt"></i>'
        deleteButton.classList.add('deleteBtn')

        container.appendChild(itemBox)

        itemBox.appendChild(input)
        itemBox.appendChild(editButton)
        itemBox.appendChild(deleteButton)
    }
}

new item("Item1")
new item("Item2")
new item("Item3")