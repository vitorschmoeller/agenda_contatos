const form = document.getElementById('contatos');
const nomeContatos = [];
const telefones = [];
const linhas = [];

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const nome = document.querySelector('input#txtnome');
    const tel = document.querySelector('input#txtnumero');

    if (telefones.includes(tel.value)) {
        alert(`O mesmo contato ${tel.value}, já foi inserido`);
    } else {
        nomeContatos.push(nome.value);
        telefones.push(tel.value);

        console.log(nomeContatos);
        console.log(telefones);

        let linha = '<tr>';
        linha += `<td>${nome.value}</td>`;
        linha += `<td>${tel.value}</td>`;
        linha += `</tr>`;
        linhas.push(linha);
    }

    nome.value = '';
    tel.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas.join('');  
}