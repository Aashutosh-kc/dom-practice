const userInput = document.getElementById('userInput');
const list = document.getElementById('list');
const btn =document.getElementById('btn');
function addToDo(){
	if(userInput.value ===''){
		return;
	}
	const li = document.createElement('li');
	const del = document.createElement('button');
	li.textContent = userInput.value;
	del.textContent = 'X';
	li.classList.add('list-items');
	del.classList.add('del-button');
	li.appendChild(del);
	list.appendChild(li);
	del.addEventListener('click',function(e){
		e.stopPropagation();
		li.remove();
	})
	userInput.value = "";
	li.addEventListener('click',function(){
		li.classList.toggle('done');
	})
}

btn.addEventListener('click',function(){
	addToDo();
})
userInput.addEventListener('keydown',function(e){
	if(e.key==="Enter"){
		addToDo();
	}
})