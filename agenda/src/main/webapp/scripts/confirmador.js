/**
 *  confirmador de exclusao de contato 
 */

function confirmar(idcon) {
	let resposta = confirm("Confirma a exlusão deste contato?")
	if (resposta === true) {
		window.location.href = "delete?idcon=" + idcon
	}
}