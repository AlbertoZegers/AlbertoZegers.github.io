document.getElementById("user-form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const username = document.getElementById("username").value;
    const plan = document.getElementById("plan").value;
    const rut = document.getElementById("rut").value;
    const valor = document.getElementById("monto").value;

    if (username === "" || plan === "" || rut === "" || valor === "") {
      alert("Por favor, complete todos los campos.");
      return;
  }
  let data = {
      usuario: username,
      tipo: plan,
      rut: rut,
      monto: valor,
  };
  
    console.log("Nuevo plan creado:");
    console.log("Nombre del cliente: ", username);
    console.log("Rut: ", rut);
    console.log("Tipo de plan: ", plan);
    console.log("valor: $", valor); 
  });