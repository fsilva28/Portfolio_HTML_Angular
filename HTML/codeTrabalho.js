function validateForm() {
    // variáveis
    let nome = document.forms["inscricao"]["nome"].value;
    let morada = document.forms["inscricao"]["morada"].value;
    let telefone = document.forms["inscricao"]["telefone"].value;
    let email = document.forms["inscricao"]["email"].value;

    // validações
    if (nome === "" || morada === "" || telefone === "" || email === "") {
        alert("Preencha todos os campos.")
        return false;
    }

    alert("Inscrição efectuada com sucesso.");
    return false;
}

function mostraTabela(tableId) {
    var tables = document.querySelectorAll('.tableContainer');
    tables.forEach(function (table) {
        table.style.display = 'none';
    });

    var selectedTable = document.getElementById(tableId);
    if (selectedTable) {
        selectedTable.style.display = 'block';
    }
}