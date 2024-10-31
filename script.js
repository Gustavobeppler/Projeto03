function verificarPoliedro() {
  const vertices = parseInt(document.getElementById('vertices').value);
  const arestas = parseInt(document.getElementById('arestas').value);
  const faces = parseInt(document.getElementById('faces').value);
  const resultado = document.getElementById('resultado');

  // Verifica a fórmula de Euler
  if (vertices - arestas + faces === 2) {
    resultado.textContent = "Este poliedro é euleriano!";
    resultado.style.color = "green";
  } else {
    resultado.textContent = "Este poliedro NÃO é euleriano.";
    resultado.style.color = "red";
  }
}
