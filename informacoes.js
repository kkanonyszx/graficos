const url = 'https://raw.githubusercontent.com/XxAndressaxX/graficos/refs/heads/main/informacoes.json'

async function vizualizarInformacoes() {
    const res = await fetch(url)
    const dados = await res.json()
 
    const quantidade_estudantes = (dados.total_estudantes)
    const quantidade_alunos_interessados= (dados.quantidade_querem_faculdade)
    const porcentagem_querem_faculdade = ((quantidade_alunos_interessados / quantidade_estudantes)* 100).toFixed(0)
    const alunos_querem_saude = (dados.total_alunos_saude)


    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo)
}

vizualizarInformacoes()
