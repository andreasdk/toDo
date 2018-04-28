var toDoList = {
	toDos: [],
	displayToDos: function() {
	console.log('My Todos:', this.toDos);
  },
  addToDo: function(toDoText) {
  	this.toDos.push({
  		toDoText: toDoText,
  		completed: false
  	});
  	this.displayToDos();
  },
  changeToDo: function(position, toDoText) {
  	this.toDos[position].toDoText = toDoText;
  	this.displayToDos();
  },
  deleteToDo: function(position) {
  	this.toDos.splice(position, 1);
  	this.displayToDos();
  },
  toggleCompleted : function(position) {
  	var toDo = this.toDos[position];
  	toDo.completed = !toDo.completed;
  	this.displayToDos();
  }
};