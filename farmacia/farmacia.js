function calcular() {

	let descricao = document.getElementById("descricao").value;
	let preco = document.getElementById("preco").value;


	let unidades = 2;
	let valor_promocao = Math.floor(preco * unidades) + (preco * unidades - Math.floor(preco * unidades));


	document.getElementById("resultado").innerHTML = "Valor na promoção para " + descricao + ": R$" + valor_promocao.toFixed(2);
}
