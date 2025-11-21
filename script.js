// Detectar backend (Netlify)
const BACKEND = "https://a4backend-elpr.onrender.com"; // URL real

const fileInput = document.getElementById("files");
const tipo = document.getElementById("tipo");
const precio = document.getElementById("precio");

let total = 0;

// ----------------------------
// Cálculo automático del total
// ----------------------------
function actualizarTotal() {
  const cantidad = fileInput.files.length;
  const precioUnit = Number(tipo.value);

  total = cantidad * precioUnit;
  precio.innerText = `Total: $${total}`;
}

fileInput.addEventListener("change", actualizarTotal);
tipo.addEventListener("change", actualizarTotal);

// ----------------------------
// INICIAR PROCESO DE PAGO
// ----------------------------
async function iniciarProceso() {
  if (fileInput.files.length === 0) {
    alert("Subí al menos 1 archivo.");
    return;
  }

  actualizarTotal();

  const formData = new FormData();
  for (let f of fileInput.files) formData.append("files", f);

  const ref = Date.now().toString();

  await fetch(`${BACKEND}/upload/${ref}`, {
    method: "POST",
    body: formData
  });

  const resp = await fetch(`${BACKEND}/create_order`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      amount: total,
      description: `Impresión A4 - Ref ${ref}`
    })
  });

  const data = await resp.json();

  if (!data.init_point) {
    alert("Error creando la orden.");
    return;
  }

  window.location.href = data.init_point;
}

// Hacer visible la función en el HTML
window.iniciarProceso = iniciarProceso;