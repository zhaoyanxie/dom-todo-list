const todo = document.querySelector('#todo-list');
const ul = document.querySelector('ul');

const tasks = [
	'buy milk',
	'eat dinner',
	'nail javascript',
	'give feedback',
];

//For each todo in the tasks array, append it to the <ul id='todo-list'></ul> element
tasks.forEach(task => {
	// Create html li element
	let elementLi = document.createElement('li');
	
	// Change the textContent of the newly created element
	elementLi.textContent = task;
	
	// Append each child li to the ul #todo-list
	todo.appendChild(elementLi);

	// Add a click listener to toggle .done class when clicked 
	elementLi.addEventListener('click', () => {
		elementLi.classList.toggle('done');
	});
});

// Add a `<input>` HTML element 
const elementInput = document.createElement('input');
document.body.insertBefore(elementInput, ul)
elementInput.placeholder = "Enter task here...";

// Add a `<button>Add Todo</button>` HTML element.
const elementBtn = document.createElement('button');
elementBtn.textContent = "Add Task";
document.body.insertBefore(elementBtn, ul);

// add a click event listener to the button
elementBtn.addEventListener('click', () => {
	// create li element
	let elementLi = document.createElement('li');
	// push the value into the array
	tasks.push(document.querySelector('input').value);
	// change the textContent of the li
	elementLi.textContent = tasks[tasks.length - 1];
	// appendChild to ul#todo-list
	document.todo.appendChild(elementLi);
	// Add a click listener to toggle .done class when clicked 
	elementLi.addEventListener('click', () => {
		elementLi.classList.toggle('done');
	});
	// clear the contents of the input
	document.querySelector('input').value = "";
});

