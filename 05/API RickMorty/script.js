
// Função para buscar informações do personagem
function fetchRickAndMortyCharacter() {
    const characterId = document.getElementById('characterId').value;
    const apiUrl = `https://rickandmortyapi.com/api/character/${characterId}`;

    fetch(apiUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Erro na requisição: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            // Exibir as informações do personagem na página
            const characterInfo = document.getElementById('characterInfo');
            characterInfo.innerHTML = `
                        <h2>Informações do Personagem:</h2>
                        <p><strong>Nome:</strong> ${data.name}</p>
                        <p><strong>Status:</strong> ${data.status}</p>
                        <p><strong>Espécie:</strong> ${data.species}</p>
                    `;

            // Exibir a imagem do personagem na página
            const characterImage = document.getElementById('characterImage');
            characterImage.innerHTML = `
                        <h2>Imagem do Personagem:</h2>
                        <img src="${data.image}" alt="${data.name}">
                    `;
        })

}

