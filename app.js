function move2() {
  let elem = document.getElementById("pokemon");
  let posL = 0
  let posT = 0
  let id1 = setInterval(moveIt1, 10)

  function moveIt1() {
    if (posL < 150 || posT < 100) {
      posL++
      posT++
      if (posT < 100) {
        elem.style.top = posT + 'px';
      }
      if (posL < 5700) {
        elem.style.left = posL + 'px';
      }
      console.log('top', elem.style.top)
      console.log('left', elem.style.left)
    } else {
      clearInterval(id1)
    }
  }
}




















function p(txt) {
  document.write(`<p>${txt}</p>`)
}









































//
// function move2() {
//   let elem = document.getElementById("pokemon");
//   let pos = 0
//   let id1 = setInterval(moveIt1, 10)
//   function moveIt1() {
//     if (pos < 350) {
//       pos++
//       elem.style.top = pos + 'px';
//       elem.style.left = pos + 'px';
//       console.log('top', elem.style.top)
//       console.log('left', elem.style.left)
//     } else {
//       clearInterval(id1)
//     }
//   }
// }
//
// function p(txt) {
//   document.write(`<p>${txt}</p>`)
// }
