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
  	for (var i = 0; i < totalToDos; i++){
  		if (this.toDos[i].completed === true) {
  			completedToDos++;
  		}
  	}

  	// If everything's true, make everything false
  	if (completedToDos === totalToDos) {
  	for (var i = 0; i < totalToDos; i++) {
  		this.toDos[i].completed = false;
  	  } 
  	} else {
  	  for (var i = 0; i < totalToDos; i++) {
  	  	this.toDos[i].completed = true;
  	  	}
  	  }
  }
};






