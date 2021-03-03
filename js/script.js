let btnAdd = document.querySelector('.add');
let btnSubtract = document.querySelector('.subtract');
let input = document.querySelector('#cantidad');

btnAdd.addEventListener('click', Sumar);
btnSubtract.addEventListener('click', Restar);

function Sumar() {
    input.value = parseInt(input.value) + 1;
    if(input.value > 1){
        btnSubtract.classList.add('active');
        btnSubtract.removeAttribute("disabled");
    }
}
function Restar() {
    input.value = parseInt(input.value) - 1;
    if(input.value == 1){
        btnSubtract.classList.remove('active');
        btnSubtract.setAttribute("disabled", true);
    }
}