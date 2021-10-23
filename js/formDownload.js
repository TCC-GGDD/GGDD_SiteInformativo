function loadFormData(event) {
    event.preventDefault();
    var form = new FormData(document.getElementById("myForm"))
    var data =
        "Nome do Jogo: " + form.get("jogo") + "\n" +
        "Nome do Autor/Empresa: " + form.get("autor") + "\n" +
        "Descrição do jogo: " + form.get("descricaojogo") + "\n" +
        "Descrição do ambiente/clima do jogo: " + form.get("descricaoclima") + "\n" +
        "Gênero: " + form.get("genero") + "\n" +
        "Público-alvo: " + form.get("publico") + "\n" +
        "Plataformas alvo: " + form.get("plataformas") + "\n" +
        "Data de início do projeto: " + form.get("datainicio") + "\n" +
        "Data estimada de término do projeto: " + form.get("datafim") + "\n";

    downloadDadosIniciais(data);
    downloadModeloBase();
    retornaPaginaDownload();
}

function downloadDadosIniciais(data) {
    var blob = new Blob([data], { type: "text/plain" });
    var url = window.URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url;
    a.download = "Dados_iniciais.txt";
    a.click();
}

function downloadModeloBase() {
    var a = document.createElement("a");
    a.href = "../files/Esboço GGDD.docx";
    a.download = "Esboço GGDD.docx";
    a.click();
}

function checaVoltar() {
    var resultado = confirm("Deseja voltar a página de download?\nOs dados já preenchidos serão perdidos");
    if (resultado) {
        window.location.href = "download.html";
    }
}

function retornaPaginaDownload() {
    alert("O arquivo com seus dados iniciais e o esboço do GGDD já foram baixados!\n" +
        "Agora mãos à obra");
    window.location.href = "../index.html";

}