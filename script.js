
function createNewElement() {
  var divcount = document.getElementsByClassName('draggable').length;
  // First create a DIV element.
	var txtNewInputBox = document.createElement('input');
  txtNewInputBox.setAttribute('type', 'text');
  txtNewInputBox.setAttribute('draggable', 'true');
  txtNewInputBox.setAttribute('class', 'draggable');
  txtNewInputBox.setAttribute('id', 'drag'+ divcount);
  txtNewInputBox.setAttribute('ondragstart', 'drag(event)');
  txtNewInputBox.setAttribute('name', 'fname');
  txtNewInputBox.setAttribute('placeholder', 'Create Element');
  txtNewInputBox.setAttribute('ondblclick', 'deleteBox()');
  txtNewInputBox.addEventListener('click', event => {
    //handle click
    event.target.style.backgroundColor = 'salmon';
  })
  //txtNewInputBox.classList.add("draggable");
  //set divCount to # of draggable divs

  // Then add the content (a new input box) of the element.
	// txtNewInputBox.innerHTML = "<input draggable = 'true' type='text' id='drag" + 
 //    divcount + "' ondragstart='drag(event)' type='text' id='fname' name='fname' value='Create Element' ondblclick='deleteBox()'>";

  // Finally put it where it is supposed to appear.
	document.getElementById("inputBoard").appendChild(txtNewInputBox);
}

function bluebtntf() {
  bluebtnOn = true;
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
// function deleteBox() {
//   const element = document.querySelector('.draggable');
//   if (!!document.querySelector('.draggable')){
//     element.remove();
//   }
// }

// window.onload=function(){
//   const btn = document.getElementById('bluebtn');
//   btn.addEventListener('click', function onClick() {
//     const txtboxid = document.activeElement.id;
//     btn.style.backgroundColor = 'blue';
//     btn.style.color = 'white';
//     document.getElementById(txtboxid).style.backgroundColor ='blue';
//   });
// }


//function blue(){
  //window.onload=function(){
    //const btn = document.getElementById('#bluebtn');
  
    //btn.addEventListener('click', function onClick(event) {
      //const box = document.getElementById('#inputBoard');
  
      //document.getElementById('#inputBoard').innerHTML = "<style=backgroundColor:'DodgerBlue'>"
    //});
  //}
//}
// window.onload=function(){
//   const btn = document.getElementById('bluebtn');
//   const txtbox = document.querySelectorAll('.draggable');
//   btn.addEventListener('click', function onClick() {
//     btn.style.backgroundColor = 'blue';
//     btn.style.color = 'white';
//     txtbox.style.backgroundColor = 'blue';
//     txtbox.style.color = 'white';
//   });