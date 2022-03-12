


/*   ----   Modelo com Jquery ----
$(document).ready(function() {
    $(window).scroll(function() {
        if(this.scrolly > 20) {
            $('.header').addClass("sticky");
        } else {
            $('.header').removeClass("sticky");
        }
    })
})
*/

const inputNome = document.querySelector('#nome')
const inputEmails = document.querySelector('#email')
const inputTel = document.querySelector('#tel')
const formulario = document.querySelector('#inputCadastro')
const botao = document.querySelector('#botao')

formulario.onsubmit = (e) => {
    e.preventDefault()

    let temErro = false
    const inputForm = document.forms['inputCadastro']['nome']

    if(!inputForm.value) {
        temErro = true
        inputNome.classList.add('error')
    } else {
        inputNome.classList.remove('error')
    }


    const inputEmail = document.forms['inputCadastro']['email']

    if(!inputEmail.value) {
        temErro = true
        inputEmail.classList.add('error')
    } else {
        inputEmail.classList.remove('error')
    }


    const inputTelefone = document.forms['inputCadastro']['tel']

    if(!inputTelefone.value) {
        temErro = true
        inputTel.classList.add('error')
    } else {
        inputTel.classList.remove('error')
    }



    if(!temErro) {
        formulario.submit()
    }
}