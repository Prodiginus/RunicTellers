const to = (num) => {
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
//document.getElementsByClassName('img')[0].style.backgroundImage = "url('https://fundraise.globalbrigades.org/media_gallery/thumb/320/0/Engineering_2014_Icon_Small.png')"
