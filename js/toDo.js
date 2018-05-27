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
  	  this.displayToDos();
  }
};

var view = {
	displayToDos: function() {
		var toDosUl = document.querySelector('ul');
		toDosUl.innerHTML = '';
		for (var i = 0; i < toDoList.toDos.length; i++) {
			var toDoLi = document.createElement('li');
			toDoLi.textContent = toDoList.toDos[i].toDoText;
			toDosUl.appendChild(toDoLi);
		}
	}
};