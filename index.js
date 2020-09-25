const addButton = document.querySelector('.addBtn')
var inputBox = document.querySelector('.add-item')
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

        editButton.addEventListener('click', () => this.editItem(input))

        deleteButton.addEventListener('click', () => this.deleteItem(itemBox))
    }

    editItem(input) {
        if( input.disabled == true) {
            input.disabled = false
            input.focus()
        }
        else {
            input.disabled = !input.disabled
        }
    }

    deleteItem(item) {
        container.removeChild(item)
        alert('Item deleted.')
    }
}

function addItem() {
    if(inputBox.value !== "") {
        new item(inputBox.value)
        inputBox.value = ""
        alert('Item added.')
    }
    else {
        alert('Item is blank, please enter data.')
    }
}

addButton.addEventListener('click', addItem)

window.addEventListener('keydown', (e)=> {
    if(e.which == 13) {
        addItem()
    }
})

new item("Default item (feel free to delete)")
