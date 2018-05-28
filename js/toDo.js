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

var view = {
	displayToDos: function() {
		var toDosUl = document.querySelector('ul');
		toDosUl.innerHTML = '';
		for (var i = 0; i < toDoList.toDos.length; i++) {
			var toDoLi = document.createElement('li');
			var toDo = toDoList.toDos[i];
			var toDoTextWithCompletion = '';

			if(toDo.completed === true)
				toDoTextWithCompletion = '(x) ' + toDo.toDoText;
			else
				toDoTextWithCompletion = '( ) ' + toDo.toDoText;

			toDoLi.id = i;
			toDoLi.textContent = toDoTextWithCompletion;
			toDoLi.appendChild(this.createDeleteButton());
			toDosUl.appendChild(toDoLi);
		}
	},
	createDeleteButton : function() {
		var deleteButton = document.createElement('button');
		deleteButton.textContent = 'Delete';
		deleteButton.className = 'deleteButton';
		return deleteButton;
	}
};



