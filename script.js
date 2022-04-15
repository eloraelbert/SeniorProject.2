//set divCount to # of draggable divs
var divcount = document.querySelectorAll('.draggable').length;


function createNewElement() {
  // First create a DIV element.
	var txtNewInputBox = document.createElement('div');
  txtNewInputBox.classList.add("draggable");

  // Then add the content (a new input box) of the element.
	txtNewInputBox.innerHTML = "<input draggable = 'true' type='text' id='drag" + 
    divcount + "' ondragstart='drag(event)' type='text' id='fname' name='fname' value='Create Element' ondblclick='deleteBox();'>";

  // Finally put it where it is supposed to appear.
	document.getElementById("inputBoard").appendChild(txtNewInputBox);
}

//to do 
//when creating new textbox, change id of input to be drag(num of )

function allowDrop(ev) {
  ev.preventDefault();
}
function drag(ev) {
  ev.dataTransfer.setData("input", ev.target.id);
}
function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("input");
  ev.target.appendChild(document.getElementById(data));
}
function deleteBox() {
  const element = document.querySelector('.draggable');
  if (!!document.querySelector('.draggable')){
    element.remove();
  }
}

// function changeColor() {
//   document.getElementsByClassName(.draggable)[0].innerHtml = "<style= background-color:Tomato;>"
// }
function blue(){
  window.onload=function(){
    const btn = document.getElementById('#bluebtn');
  
    btn.addEventListener('click', function onClick(event) {
      const box = document.getElementById('#inputBoard');
  
      document.getElementById('#inputBoard')[0].innerHTML = "style="background-color:DodgerBlue;" "
    });
  }
}


