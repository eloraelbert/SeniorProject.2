


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

  var bluebtnOn = false;
  var pinkbtnOn = false;
  var purplebtnOn = false;  
  txtNewInputBox.addEventListener('click', event => {
    //handle click
    if (bluebtnOn == true); {
      event.target.style.backgroundColor = 'blue';
    }
    if (pinkbtnOn == true); {
      event.target.style.backgroundColor = 'salmon';
    }
    if (purplebtnOn == true); {
      event.target.style.backgroundColor = 'purple';
    }
  })
  //txtNewInputBox.classList.add("draggable");
  //set divCount to # of draggable divs

  // Then add the content (a new input box) of the element.
	// txtNewInputBox.innerHTML = "<input draggable = 'true' type='text' id='drag" + 
 //    divcount + "' ondragstart='drag(event)' type='text' id='fname' name='fname' value='Create Element' ondblclick='deleteBox()'>";

  // Finally put it where it is supposed to appear.
	document.getElementById("inputBoard").appendChild(txtNewInputBox);
}


window.onload=function(){
  const btn = document.getElementById('bluebtn');
  btn.addEventListener('click', function onClick() {
    btn.style.backgroundColor = 'blue';
    btn.style.color = 'white';
    bluebtnOn = true;
    pinkbtnOn = false;
    purplebtnOn = false;
    return bluebtnOn, pinkbtnOn, purplebtnOn;
  });
}

window.onload=function(){
  const btn = document.getElementById('pinkbtn');
  btn.addEventListener('click', function onClick() {
    btn.style.backgroundColor = 'salmon';
    btn.style.color = 'white';
    bluebtnOn = false;
    pinkbtnOn = true;
    purplebtnOn = false;
    return bluebtnOn, pinkbtnOn, purplebtnOn;
  });
}

window.onload=function(){
  const btn = document.getElementById('purplebtn');
  btn.addEventListener('click', function onClick() {
    btn.style.backgroundColor = 'purple';
    btn.style.color = 'white';
    bluebtnOn = false;
    pinkbtnOn = false;
    purplebtnOn = true;
    return bluebtnOn, pinkbtnOn, purplebtnOn;
  });
}

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

