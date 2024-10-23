const url = 'https://raw.githubusercontent.com/XxAndressaxX/graficos/refs/heads/main/informacoes.json'

async function vizualizarInformacoes() {
    const res = await fetch(url)
    const dados = await res.json()
 
    const quantidade_estudantes = (dados.total_estudantes)
    const quantidade_alunos_interessados= (dados.quantidade_querem_faculdade)
    const porcentagem_querem_faculdade = ((quantidade_alunos_interessados / quantidade_estudantes)* 100)
    const alunos_querem_saude= (dados.total_alunos_saude)


    const numero_votos = (dados.total_votos)
    const numero_aula_Victor = (dados.total_aula_profVictor)
    const numero_aula_Mazza = (dados.total_aula_semana)
    const porcentagem_Victor = ((numero_aula_Victor / numero_aula_Mazza ) * 100)

    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = `Você sabia que em uma pesquisa feita pelo <span>IBGE</span> realizada com <span>${quantidade_estudantes} jovens </span> apenas <span>${porcentagem_querem_faculdade} </span> dos jovens querem ingressar na faculdade? Isso representa <span> ${quantidade_alunos_interessados} <span/> Além disso, dentre os cursos disponíveis, participaram do questionário? O professor <span>Victor Yanaguisawa</span> leciona <span>${numero_aula_Victor} aulas por semana</span>, e no colégio há <span>${numero_aula_Mazza} aulas por semana</span>. <br>Isso significa que <span>${porcentagem_Victor}%</span> das aulas acontece com um único professor. Abaixo está o resultado do Questionário`

    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo)
}

vizualizarInformacoes()
