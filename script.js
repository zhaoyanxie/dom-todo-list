const todo = document.querySelector('#todo-list');
const ul = document.querySelector('ul');

const tasks = [
	'buy milk',
	'eat dinner',
	'nail javascript',
	'give feedback',
];

// function to add a task to the ul 
const createTask = task => {
	// Create html li element
	let li = document.createElement('li'); // const works as well.....
	const span = document.createElement('span'); // Create a span for deletion

	li.textContent = task; // Change the textContent of the newly created element
	todo.appendChild(li); // Append each child li to the ul #todo-list

	span.textContent = 'X'; // Change the textContent of the newly created span
	li.appendChild(span); // Append span to each li

	// Add a click listener to toggle .done class when clicked,
	li.addEventListener('click', () => {
		li.classList.toggle('done'); 
	});

	// Add a click listener to hide display when X is clicked;
	span.addEventListener('click', () => {
		li.style.display = 'none'; 
	});
}

//For each todo in the tasks array, append it to the <ul id='todo-list'></ul> element
tasks.forEach(createTask);

// Add a `<input>` HTML element 
const elementInput = document.createElement('input');
document.body.insertBefore(elementInput, ul)
elementInput.placeholder = "Enter task here...";

// Add a `<button>Add Todo</button>` HTML element.
const button = document.createElement('button');
button.textContent = "Add Task";
document.body.insertBefore(button, ul);



// add a click event listener to the button
button.addEventListener('click', () => {
	const input = document.querySelector('input');

	if (input.value !== '') {
		tasks.push(input.value); // push the value into the array
		createTask(tasks[tasks.length - 1]); // call function to add task
		input.value = ""; // clear the contents of the input
	}
	
});





