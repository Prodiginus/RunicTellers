const to = (num, el) => {
  let current = document.getElementsByClassName('rune').length
  if(num >= current) {
    for (let i = 0; i < num - current; i++) {
      runeContainer.appendChild(makeRune())
    }
  } else {
    for (let i = current - num; i > 0; i--) {
      document.getElementsByClassName('rune')[0].remove();
    }
  }
}
const fetchRunes = (num) => {
  console.log(num)
}
const makeRune = () => {
  let img = document.createElement('div')
  img.classList.add('img')
  let desc = document.createElement('div')
  desc.classList.add('desc')
  let rune = document.createElement('div')
  rune.classList.add('rune')
  rune.appendChild(img)
  rune.appendChild(desc)
  return rune
}
const updateRune = (data) => {

}