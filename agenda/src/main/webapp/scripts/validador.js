/**
 *  	validador de usuario
 */

function validar() {
	let nome = frmContato.nome.value
	let fone = frmContato.fone.value
	if (nome === "") {
		frmContato.nome.focus()
		return false
	}
	else if (fone === "") {
		alert("Preencha o seu telefone. ")
		frmContato.fone.focus()
		return false
	}
	else {
		document.forms['frmContato'].submit()
	}
}