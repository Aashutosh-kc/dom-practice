const userInput = document.getElementById('userInput');
const list = document.getElementById('list');
const btn =document.getElementById('btn');

btn.addEventListener('click',function(){
	const li = document.createElement('li');
	li.textContent = userInput.value;
	list.appendChild(li);
	userInput.value = "";
	li.addEventListener('click',function(){
		li.classList.toggle('done');
	})
})