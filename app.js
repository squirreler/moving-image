// moveIt()



function move2() {
  // let x = document.getElementById('posX').value
  // let y = document.getElementById('posY').value
  // let elem = document.getElementById("myAnimation");
  let elem = document.getElementById("pokemon");
  let pos = 0
  let id = setInterval(moveIt, 10)
  function moveIt() {
    if (pos < 500) {
      pos++
      console.log(pos)
      elem.style.top = pos + 'px';
      elem.style.left = pos + 'px';
    } else {
      clearInterval(id)
    }

  }

}

function myMove() {
  var elem = document.getElementById("myAnimation");
  var pos = 0;
  var id = setInterval(frame, 10);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.top = pos + 'px';
      elem.style.left = pos + 'px';
    }
  }
}

function p(txt) {
  document.write(`<p>${txt}</p>`)
}
