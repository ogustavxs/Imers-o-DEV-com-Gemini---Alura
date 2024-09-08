const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const randomButton = document.getElementById("randomButton");
const characterCard = document.getElementById("characterCard");

// Função para buscar um personagem
function searchCharacter() {
	const searchTerm = searchInput.value.toLowerCase();
	searchInput.value = "";

	if (searchTerm) {
		const personagem = personagens.find((p) =>
			p.nome.toLowerCase().includes(searchTerm),
		);
		characterCard.style.display = "flex"; // Mostra o card independentemente do resultado

		if (personagem) {
			// Exibe o personagem encontrado
			characterCard.querySelector("h1").textContent = personagem.nome;
			characterCard.querySelector("h2").textContent = personagem.genero;
			characterCard.querySelector("h3").textContent = personagem.descricao;
		} else {
			// Exibe a mensagem "Nada foi encontrado"
			characterCard.querySelector("h1").textContent = "Nada foi encontrado";
			characterCard.querySelector("h2").textContent = "";
			characterCard.querySelector("h3").textContent = "";
		}
	}
}

searchButton.addEventListener("click", searchCharacter);
// Função para escolher um personagem aleatório
function chooseRandomCharacter() {
	const randomIndex = Math.floor(Math.random() * personagens.length);
	const personagemAleatorio = personagens[randomIndex];

	// Exibe o personagem aleatório
	characterCard.style.display = "flex";
	characterCard.querySelector("h1").textContent = personagemAleatorio.nome;
	characterCard.querySelector("h2").textContent = personagemAleatorio.genero;
	characterCard.querySelector("h3").textContent = personagemAleatorio.descricao;
}

// Adiciona o evento de clique ao botão "Estou com sorte"
randomButton.addEventListener("click", chooseRandomCharacter);
