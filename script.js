document.getElementById("denunciaForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let denuncias = JSON.parse(localStorage.getItem("denuncias")) || [];

  let nova = {
    denunciante: denunciante.value,
    denunciado: denunciado.value,
    tipo: tipo.value,
    descricao: descricao.value,
    provas: provas.value,
    data: new Date().toLocaleString(),
    status: "Pendente"
  };

  denuncias.push(nova);
  localStorage.setItem("denuncias", JSON.stringify(denuncias));

  document.getElementById("msg").innerHTML = "✅ Denúncia enviada com sucesso!";
  this.reset();
});
