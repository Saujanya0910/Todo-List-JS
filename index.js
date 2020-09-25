const addBtn = document.querySelector('.addBtn')
var inputValue = document.querySelector('.todo-item')
const container = document.querySelector('.container ul')

class item{
	constructor(name){
		this.createItem(name)
    }
    
    createItem(name){
    	var itemBox = document.createElement('li')
        itemBox.classList.add('todo-item')

    	var input = document.createElement('input')
    	input.type = "text"
    	input.disabled = true
    	input.value = name
    	input.classList.add('item')

    	var editButton = document.createElement('button')
    	editButton.classList.add('editBtn')
    	editButton.innerHTML = '<i class="fas fa-pencil-alt"></i>'

    	var deleteButton = document.createElement('button')
    	deleteButton.classList.add('deleteBtn')
    	deleteButton.innerHTML = '<i class="far fa-trash-alt"></i>'

    	container.appendChild(itemBox)

        itemBox.appendChild(input)
        itemBox.appendChild(editButton)
        itemBox.appendChild(deleteButton)

        editButton.addEventListener('click', () => this.edit(input, name))
    }

    edit(input, name) {
        input.disabled = false
        input.focus()
    }
}

new item("Item1")
new item("Item2")
new item("Item3")