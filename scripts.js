window.onload = () => {
    const cards = document.querySelectorAll('.card')
    cards.forEach(card => {
        card.style.backgroundColor = '#e16e0a'
    })

    const tituloCard = document.querySelectorAll('.titulo-card')
    tituloCard.forEach(titulo => {
        titulo.style.color = '#2b385b'
        titulo.innerText = 'Meu Card'
    })

    const descricaoCard = document.querySelectorAll('.descricao-card')
    descricaoCard.forEach(descricao => {
        descricao.innerText = 'Descrição modificada pelo JavaScript'
        descricao.style.color = 'white'
        descricao.style.fontSize = '14px'
        descricao.style.margin = '30px 0 30px 0'
    })

    const botaoEditar = document.querySelectorAll('.botao-editar')
    botaoEditar.forEach(editar => {
        editar.style.backgroundColor = '#007d00'
        editar.style.border = '1px solid #007d00'
        editar.style.borderRadius = '8px'
        editar.style.padding = '8px'
        editar.style.color = 'white'
        editar.style.cursor = 'pointer'
        editar.setAttribute('onclick', 'editarCard()')
    })

    const botaoDeletar = document.querySelectorAll('.botao-apagar')
    botaoDeletar.forEach(deletar => {
        deletar.style.backgroundColor = '#ff0000'
        deletar.style.border = '1px solid #ff0000'
        deletar.style.borderRadius = '8px'
        deletar.style.padding = '8px'
        deletar.style.color = 'white'
        deletar.style.cursor = 'pointer'
        deletar.setAttribute('onclick', 'apagarCard()')
    })
}


function editarCard() {
    alert('Clicou em Editar!')
}

function apagarCard() {
    const querDeletar = confirm('Tem certeza que deseja excluir este card?')

    if (querDeletar) {
        alert('Comfirmado!')
    } else {
        alert('Cancelou!')
    }
}



