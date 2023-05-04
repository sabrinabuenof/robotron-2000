const lista = document.querySelector('ul');
const botaoMostrar = document.querySelector('#botaoMostrar')
const botaoEsconder = document.querySelector('#botaoEsconder');

botaoMostrar.addEventListener('click', () => {
    lista.setAttribute('data-lista', 'mostrar')
});

botaoEsconder.addEventListener('click', () => {
    lista.setAttribute('data-lista', 'esconder')
});