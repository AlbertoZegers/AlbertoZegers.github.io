document.getElementById("user-form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const username = document.getElementById("username").value;
    const rut = document.getElementById("rut").value;
    const estado = document.getElementById("estado").value;

    if (username === "" || rut === "" || estado === "") {
      alert("Por favor, complete todos los campos.");
      return;
  }
  let data = {
      usuario: username,
      rut: rut,
      estado: estado,
  };
  
    console.log("Prospecto creado:");
    console.log("Nombre del cliente: ", username);
    console.log("Rut: ", rut);
    console.log("Estado: ", estado); 
  });