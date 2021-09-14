const book = document.querySelector('.bookContainer');
const content = document.querySelector('.content')

window.addEventListener('load', (event) => {
  setTimeout(() => {
    book.className = `${book.className} bookHide`
  },1000)
  setTimeout(() => {
  content.className = `${content.className} contentShow`
  },1000)
});