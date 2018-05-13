var toDoList = {
	toDos: [],
	displayToDos: function() {
		if (this.toDos.length === 0) {
			console.log('Your todo list is empty!');
		} else {
			console.log('My Todos:');
			for (var i = 0; i < this.toDos.length; i++) {
			 console.log(this.toDos[i].toDoText);

			 if(this.toDos[i].completed === true){
			   console.log('(x)', this.toDos[i].toDoText);
			 } else {
			   console.log('( )', this.toDos[i].toDoText);
			 }
		}
	}
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