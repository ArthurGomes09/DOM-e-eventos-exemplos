function calcularDuracao() {
			
    var titulo = document.getElementById("titulo").value;
    var duracaoMinutos = parseInt(document.getElementById("duracao").value);

    
    var duracaoHoras = Math.floor(duracaoMinutos / 60);
    var duracaoMinutosRestantes = duracaoMinutos % 60;

    
    var resultado = document.getElementById("resultado");
    resultado.innerHTML = "<p>Título: " + titulo + "</p><p>Duração: " + duracaoHoras + "h " + duracaoMinutosRestantes + "min</p>";
}