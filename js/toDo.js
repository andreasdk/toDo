var toDoList = {
	toDos: ['item1', 'item2', 'item3'],
	displayToDos() {
	console.log('My Todos:', this.toDos);
  },
  addToDo: function(toDo) {
  	this.toDos.push(toDo);
  	this.displayToDos();
  },
  changeTodo: function(position, newValue) {
  	this.toDos[position] = newValue;
  	this.displayToDos();
  },
  deleteToDo: function(position) {
  	this.toDos.splice(position, 1);
  	this.displayToDos();
  }
};