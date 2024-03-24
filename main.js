//recupera o form do html
const form = document.getElementById('form-contatos');
const contatos = [];
const telefones = [];
let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    salvaContato();
    atualizaListaContatos();
});

function salvaContato(){
    //recupera os inputs do html
    const inputNome = document.getElementById('nome');
    const inputTelefone = document.getElementById('telefone');
    //verifica se o contato já foi inserido
    if(contatos.includes(inputNome.value)){
        alert('O contato ' + inputNome.value + ' já existe.');
    }else{
        contatos.push(inputNome.value);
        telefones.push(inputTelefone.value);

        let linha = '<tr>';
        linha += '<td>'+inputNome.value+'</td>';
        linha += '<td>'+inputTelefone.value+'</td>';
        linha += '</tr>';

        linhas += linha;

        inputNome.value = '';
        inputTelefone.value = '';
    }
}

function atualizaListaContatos(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}