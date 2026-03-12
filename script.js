const heading= document.getElementById('heading');
const btn = document.getElementById('btn');

btn.addEventListener('click', function(){
	heading.textContent = "DOM is working!";
	heading.style.color = 'red';
	document.body.style.background = 'burlywood';
	const p = document.createElement('p');
	p.textContent = 'New added paragraph';
	document.body.appendChild(p);
	heading.classList.toggle('active');
});