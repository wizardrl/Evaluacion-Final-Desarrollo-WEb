(() => {
  document
    .querySelectorAll("#year")
    .forEach((el) => (el.textContent = new Date().getFullYear()));
  const form = document.querySelector("#interest-form");
  if (!form) return;
  const status = document.querySelector("#form-status");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    form.classList.add("was-validated");
    if (!form.checkValidity()) {
      status.textContent = "Revisá los campos señalados antes de enviar.";
      status.className = "mt-3 mb-0 text-danger";
      form.querySelector(":invalid").focus();
      return;
    }
    const name = form.elements.nombre.value.trim().split(" ")[0];
    status.textContent = `Gracias${name ? ", " + name : ""}. Recibimos tu consulta y te responderemos pronto.`;
    status.className = "mt-3 mb-0 text-success fw-bold";
    form.reset();
    form.classList.remove("was-validated");
  });
})();
