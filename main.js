const form = document.getElementById("form-contato");
const imgFixo = '<img src="./Imagens/Tel. fixo.png" alt="telefone fixo" />';
const imgCelular = '<img src="./Imagens/Tel. Celular.png" alt="telefone celular" />';

let linhas = '';

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const inputNomeContato = document.getElementById("nome-contato");
    const inputNumeroContato = document.getElementById("numero-contato");

    const numeroContato = inputNumeroContato.value.replace(/\D/g, '');

    if (numeroContato.length === 0 || numeroContato.length < 10 || numeroContato.length > 12) {
        alert("Por favor, insira um número válido.");
    }

    let linha = '<tr>';
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputNumeroContato.value}</td>`;
    linha += `<td>${numeroContato.length >= 12 ? imgCelular : imgFixo}</td>`;
    linha += `</tr>`;

    linhas += linha;

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

    inputNomeContato.value = '';
    inputNumeroContato.value = '';
});