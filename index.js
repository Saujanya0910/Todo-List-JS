const addButton = document.querySelector('.addBtn')
const editBtn = document.querySelector('container .editBtn')
var inputBox = document.querySelector('.add-item')
const container = document.querySelector('.container ul')

// initialise array to store todo-items
if(window.localStorage.getItem("todos") == undefined){
    var todos = []
    window.localStorage.setItem("todos", JSON.stringify(todos))
}

// convert json to javascript value
var todosEX = window.localStorage.getItem("todos")
var todos = JSON.parse(todosEX)

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

        editButton.addEventListener('click', () => this.editItem(input, name))

        deleteButton.addEventListener('click', () => this.deleteItem(itemBox, name))
    }

    // edit button func
    editItem(input, name) {
        if( input.disabled == true) {
            input.disabled = false
            input.focus()
        }
        else {
            let indexof = todos.indexOf(name)
            input.disabled = !input.disabled
            
            let newVal = input.value
            todos[indexof] = newVal
            window.localStorage.setItem("todos", JSON.stringify(todos))
        }
    }

    // delete button func
    deleteItem(item, name) {
        container.removeChild(item)
        let index = todos.indexOf(name)
        todos.splice(index, 1)
        window.localStorage.setItem("todos", JSON.stringify(todos))
        alert('Item deleted.')
    }
}

// add item function
function addItem() {
    if(inputBox.value !== "") {
        inputBox.value = inputBox.value.trim()
        new item(inputBox.value)
        todos.push(inputBox.value)
        window.localStorage.setItem("todos", JSON.stringify(todos))
        inputBox.value = ""
        alert('Item added.')
        inputBox.focus()
    }
    else {
        alert('Item is blank, please enter data.')
        inputBox.focus()
    }
}

// response to add-btn click
addButton.addEventListener('click', addItem)

// response to enter-btn click
window.addEventListener('keydown', (e)=> {
    if(e.which == 13) {
        addItem()
    }
})

// default item 
new item("Default item (feel free to delete)")

// display all stored items  
for (var i = 0 ; i < todos.length ; i++){
    new item(todos[i]);
}