
const textoDigitado = document.querySelector('.text-area')

const botaoCriptografar = document.querySelector('.btn-encriptar')
const botaoDescriptografar = document.querySelector('.btn-desencriptar')

const telaResultado = document.querySelector('.mensagem')

const botaoCopiar = document.querySelector('.btn-copiar')

const letras = ['a', 'e', 'i', 'o', 'u']
const codigos = ['ai', 'enter', 'imes', 'ober', 'ufat']


function textoInformado() {
    let texto = textoDigitado.value
    return texto 
}



function criptografar () {
    frase = textoInformado()

    if(frase !== '') {

        
        frase = frase.replace(/e/g, codigos[1])
        frase = frase.replace(/i/g, codigos[2])
        frase = frase.replace(/a/g, codigos[0])
        frase = frase.replace(/o/g, codigos[3])
        frase = frase.replace(/u/g, codigos[4])
    }
    mostrarResultado(frase)
}

function descriptografar () {
    frase = textoInformado()

    if(frase !== '') {

        frase = frase.replace(/ai/g, letras[0])
        frase = frase.replace(/enter/g, letras[1])
        frase = frase.replace(/imes/g, letras[2])
        frase = frase.replace(/ober/g, letras[3])
        frase = frase.replace(/ufat/g, letras[4])
    }
    mostrarResultado(frase)
}

function copiar() {
    let textoCopiado = document.querySelector(".mensagem");
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999);
  
    document.execCommand("copy");

}

botaoCriptografar.addEventListener('click', criptografar)
botaoDescriptografar.addEventListener('click', descriptografar)
botaoCopiar.addEventListener('click', copiar);

function mostrarResultado(texto) {
    telaResultado.innerHTML = texto
    textoDigitado.value = ""
}

