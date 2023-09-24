const listaPessoas = document.getElementById("listaPessoas");
const btAnterior = document.getElementById("btAnterior");
const btProxima = document.getElementById("btProxima");
let currentPage = 1;
let numberList = 0;

const calc = () => {
  if (currentPage == 1) {
    numberList = currentPage;
  } else {
    numberList = currentPage * 10 - 9;
  }
}

const exibirLista = (lista) => {
  listaPessoas.innerHTML = "";

  if (currentPage == 1) {
    numberList = currentPage;
  } else {
    numberList = currentPage * 10 - 9;
  }

  for (let i = 0; i < lista.length; ++i) {
    const li = document.createElement("li");
    const text = document.createTextNode(
      `${numberList}. ${lista[i].name} (${lista[i].birth_year}) (${lista[i].height} cm)`
    );
    li.appendChild(text);
    listaPessoas.appendChild(li);
    numberList++;
  }
};

const configurarBotoes = (data) => {
  const { previous, next } = data;

  btAnterior.disabled = previous === null;
  btAnterior.onclick = () => {
    fetchAPI(previous);
    btAnterior.disabled = true;
    currentPage--;
  };

  btProxima.disabled = next === null;
  btProxima.onclick = () => {
    fetchAPI(next);
    btProxima.disabled = true;
    currentPage++;
  };
};

const fetchAPI = (url) => {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      exibirLista(data.results);
      configurarBotoes(data);
    });
};

fetchAPI("https://swapi.dev/api/people/?page=1");
