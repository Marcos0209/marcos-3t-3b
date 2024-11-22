const url = 'https://raw.githubusercontent.com/pmatjayme/api/refs/heads/main/marcos.json'

async function vizualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()

    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = `Os times brasileiros que mais possuem títulos de mundiais são os apresentados: São <span>${dados.Sao_Paulo}</span> para o São Paulo, <span>${dados.Santos}</span> do Santos, enquanto que <span>${dados.Corinthians}</span> do Corinthians, sendo <span>${dados.Palmeiras}</span> do Palmeiras, polêmico. Para o Flamengo temos <span>${dados.Flamengo}</span> e <span>${dados.Gremio}</span> para o Grêmio.`

    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo)
}

vizualizarInformacoesGlobais()
