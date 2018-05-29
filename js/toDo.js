var toDoList = {
	toDos: [],
  addToDo: function(toDoText) {
  	this.toDos.push({
  		toDoText: toDoText,
  		completed: false
  	});
  },
  changeToDo: function(position, toDoText) {
  	this.toDos[position].toDoText = toDoText;
  },
  deleteToDo: function(position) {
  	this.toDos.splice(position, 1);
  },
  toggleCompleted : function(position) {
  	var toDo = this.toDos[position];
  	toDo.completed = !toDo.completed;
  },
  toggleAll : function() {
  	var totalToDos = this.toDos.length;
  	var completedToDos = 0;

  	// Get number of compelted toDos
  	this.toDos.forEach(function(toDo) {
  		if (toDo.completed === true) {
  			completedToDos++;
  		}
  	});

  	this.toDos.forEach(function(toDo) {
  		// if everything true, make everything false
  		if (completedToDos === totalToDos) {
  		// otherwise make everything true	
  			toDo.completed = false;
  		} else {
  			toDo.completed = true;
  		}
  	});
  }
};






