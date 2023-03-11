function calcular() {
	
	let preco = document.getElementById("preco").value;
	let consumo = document.getElementById("consumo").value;

	
	let consumo_kg = consumo / 1000;

	
	let valor = preco * consumo_kg;

	
	document.getElementById("resultado").innerHTML = "Valor a ser pago: R$" + valor.toFixed(2);
}
