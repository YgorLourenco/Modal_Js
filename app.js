const openBtn = document.querySelector('.open')
const modalContainer = document.querySelector('.modal-container')
const closeBtn = document.querySelector('.modal-btn')

// Colocou estilo CSS que tira opacidade do modal no botão fora do Modal
openBtn.addEventListener('click', function() {
    modalContainer.classList.add('show')
})

// Retirou estilo CSS que tira opacidade do modal, no botão dentro do modal
closeBtn.addEventListener('click', function() {
    modalContainer.classList.remove('show')
})
