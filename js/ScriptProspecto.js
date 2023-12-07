document.getElementById("user-form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const username = document.getElementById("username").value;
    const monto = document.getElementById("monto").value;
    const rut = document.getElementById("rut").value;
    const estado = document.getElementById("estado").value;
  
    console.log("Prospecto cerrado:");
    console.log("Nombre del cliente: ", username);
    console.log("Rut: ", rut);
    console.log("Monto del producto: ", monto);
    console.log("Estado: ", estado); 
  });