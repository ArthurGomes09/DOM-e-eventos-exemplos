function calcular() {
	let modelo = document.getElementById("modelo").value;
	let preco = document.getElementById("preco").value;

	let entrada = preco * 0.5;

	let saldo = (preco - entrada) / 12;

	document.getElementById("resultado").innerHTML = "Modelo: " + modelo + "<br>Valor da entrada: R$" + entrada.toFixed(2) + "<br>Saldo em 12x: R$" + saldo.toFixed(2);
}
