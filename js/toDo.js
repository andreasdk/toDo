var toDos = ['item1', 'item2', 'item3']

// It should have a function to display toDos
function displayTodos() {
	console.log('My Todos:',toDos);
}
// It should have a function to add toDos
function addTodo(toDo) {
	toDos.push(toDo);
	displayTodos();
}
// It should have a function to edit toDos
function changeTodo(position, newValue) {
	toDos[position] = newValue;
}
// It should have a function to delete toDos
function deleteTodo(position) {
	toDos.splice(position, 1);
	displayTodos();
}