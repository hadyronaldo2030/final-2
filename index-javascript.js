let input = document.getElementById('taskdata');
let addbtn = document.getElementById('addbtn');
let notask = document.getElementById('notask');
let tasks = document.getElementById('tasks');
let model = document.getElementById('model');
let show = document.getElementById('show');
let closes = document.getElementsByClassName('close');


let showModel = () =>{
	model.classList.toggle('display')
}
show.addEventListener('click', showModel);
closes[0].addEventListener('click', showModel);
closes[1].addEventListener('click', showModel)

let showNoTasks = () => {
	if (tasks.childElementCount==0){
		notask.classList.remove('none')
	}
}

let addTask = ()=> {
	let task = input.value;
	if (task.trim() == 0 || task.length < 2 || task.length > 20){
		alert("You Must Center Valid Data")	
	} else {
		notask.classList.add('none');
		tasks.innerHTML += 
		`<div class='alert alert-info'> ${task}
			<button class='delete float-right btn btn-danger  float-end'>
				delete 
			</button>
		</div>`;	
		showModel();
	}
	input.value = "";
}
addbtn.addEventListener('click', addTask);


let deleteTask = (e) => {
	if (e.target.classList.contains('delete')){
		e.target.parentElement.remove();
		showNoTasks();
	}
}
document.addEventListener('click', deleteTask)