document.getElementById("user-form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const username = document.getElementById("username").value;
    const rut = document.getElementById("rut").value;
    const estado = document.getElementById("estado").value;
  
    console.log("Prospecto creado:");
    console.log("Nombre del cliente: ", username);
    console.log("Rut: ", rut);
    console.log("Estado: ", estado); 
  });
