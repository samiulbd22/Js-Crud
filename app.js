const ul = document.getElementById("list");

//add element
addBtn.addEventListener("click",function (e){
e.preventDefault();
const li= document.createElement("li");
const p1 = document.createElement("p");
const p2 = document.createElement("p");
const i1 = document.createElement("i");
const i2 = document.createElement("i");
const input = document.createElement("input");
let inputValue = document.getElementById("add-input");
if(inputValue.value !==''){
p1.textContent = inputValue.value;
li.appendChild(p1);
i1.className = "fa fa-pencil-square-o";
p2.appendChild(i1);
i2.className = "fa fa-times";
p2.appendChild(i2);
li.appendChild(p2);
input.setAttribute("type","text");
input.className = "edit-note";
li.appendChild(input);
ul.appendChild(li)
inputValue.value = "";
}
});
//edit element
ul.addEventListener("click", function(e){
if(e.target.className === "fa fa-pencil-square-o"){
e.target.parentNode.style.display = 'none';
const noteInput = e.target.parentNode.nextElementSibling;
const note = e.target.parentNode.previousElementSibling;
noteInput.style.display = 'block';
noteInput.value = note.textContent
// update and delete
noteInput.addEventListener("keypress", function(e){
if(e.keyCode === 13){
	if(noteInput.value !== ""){
	note.textContent = noteInput.value;
	noteInput.style.display = 'none';
	noteInput.previousElementSibling.style.display = 'block';
}else{
	const li = noteInput.parentNode;
	li.parentNode.removeChild(li);
}
}
});
}
else if(e.target.className === "fa fa-times"){
const p = e.target.parentNode;
p.parentNode.parentNode.removeChild(p.parentNode)
}
});
})();
