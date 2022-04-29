
//window.onload=function(){
  var bluebtnOn = false;
  var pinkbtnOn = false;
  var purplebtnOn = false; 
  const bbtn = document.getElementById('bluebtn');
  bbtn.addEventListener('click', function onClick() {
    if (bluebtnOn == false) {
      bbtn.style.backgroundColor = '#83CBBF';
      bbtn.style.color = 'white';
      bluebtnOn = true;
    } else {
       bbtn.style.backgroundColor = '#F9F6F1';
       bbtn.style.color = 'black';
       bluebtnOn = false;
    }
    return bluebtnOn;
  });
  const pbtn = document.getElementById('pinkbtn');
  pbtn.addEventListener('click', function onClick() {
    if (pinkbtnOn == false) {
      pbtn.style.backgroundColor = '#DBA095';
      pbtn.style.color = 'white';
      pinkbtnOn = true;
    } else {
       pbtn.style.backgroundColor = '#F9F6F1';
       pbtn.style.color = 'black';
       pinkbtnOn = false;
    }
    return pinkbtnOn;
  });
  const plbtn = document.getElementById('purplebtn');
  plbtn.addEventListener('click', function onClick() {
    if (purplebtnOn == false) {
      plbtn.style.backgroundColor = '#AB90B6';
      plbtn.style.color = 'white';
      purplebtnOn = true;
    } else {
       plbtn.style.backgroundColor = '#F9F6F1';
       plbtn.style.color = 'black';
       purplebtnOn = false;
    }
    return purplebtnOn;
  });
//} 

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
    if (bluebtnOn == true) {
      event.target.style.backgroundColor = '#83CBBF';
      event.target.style.color = 'white';
    } if (pinkbtnOn == true) {
      event.target.style.backgroundColor = '#DBA095';
      event.target.style.color = 'white';
    } if (purplebtnOn == true) {
      event.target.style.backgroundColor = '#AB90B6';
      event.target.style.color = 'white';
    }
  })

  // Finally put it where it is supposed to appear.
	document.getElementById("inputBoard").appendChild(txtNewInputBox);
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

