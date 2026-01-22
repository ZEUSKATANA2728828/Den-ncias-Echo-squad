function login() {
  let user = document.getElementById("user").value;
  let pass = document.getElementById("pass").value;

  if(user === "adm123" && pass === "adm456") {
    document.getElementById("loginBox").classList.add("hidden");
    document.getElementById("painel").classList.remove("hidden");
    carregarDenuncias();
  } else {
    document.getElementById("loginMsg").innerText = "❌ Login inválido!";
  }
}

function carregarDenuncias() {
  let lista = document.getElementById("listaDenuncias");
  let denuncias = JSON.parse(localStorage.getItem("denuncias")) || [];

  lista.innerHTML = "";

  denuncias.forEach((d, i) => {
    lista.innerHTML += `
      <div class="denuncia">
        <b>Acusado:</b> ${d.denunciado}<br>
        <b>Tipo:</b> ${d.tipo}<br>
        <b>Status:</b> ${d.status}<br>
        <b>Data:</b> ${d.data}<br>
        <button onclick="resolver(${i})">✔ Resolver</button>
        <button onclick="negar(${i})">❌ Negar</button>
      </div>
    `;
  });
}

function resolver(i) {
  let denuncias = JSON.parse(localStorage.getItem("denuncias"));
  denuncias[i].status = "Resolvida";
  localStorage.setItem("denuncias", JSON.stringify(denuncias));
  carregarDenuncias();
}

function negar(i) {
  let denuncias = JSON.parse(localStorage.getItem("denuncias"));
  denuncias[i].status = "Negada";
  localStorage.setItem("denuncias", JSON.stringify(denuncias));
  carregarDenuncias();
}
