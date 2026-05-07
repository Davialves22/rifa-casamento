// Números já ocupados (vermelhos)
const ocupados = [
  1, 3, 4, 7, 8, 9, 11, 12, 13, 17, 18, 19, 20, 25, 26, 27, 35, 46, 83, 77, 91,84,87
];

const grid = document.getElementById("gridRifa");
const painel = document.getElementById("painelEscolha");
const numeroTexto = document.getElementById("numeroSelecionado");

let numeroSelecionado = null;

for (let i = 1; i <= 100; i++) {
  const btn = document.createElement("button");

  btn.classList.add("numero");

  btn.innerText = i;

  if (ocupados.includes(i)) {
    btn.classList.add("ocupado");
  } else {
    btn.classList.add("disponivel");

    btn.addEventListener("click", () => {
      document.querySelectorAll(".disponivel").forEach((el) => {
        el.classList.remove("selecionado");
      });

      btn.classList.add("selecionado");

      numeroSelecionado = i;

      numeroTexto.innerText = i;

      painel.style.display = "block";

      painel.scrollIntoView({
        behavior: "smooth",
      });
    });
  }

  grid.appendChild(btn);
}

function enviarWhatsApp() {
  if (numeroSelecionado == null) {
    return;
  }

  // Seu número
  const telefone = "+5581973417256";

  const mensagem = `Olá! Tenho interesse no número ${numeroSelecionado} da Rifa de Casamento Juliana & Davi 🎉`;

  const url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;

  window.open(url, "_blank");
}
