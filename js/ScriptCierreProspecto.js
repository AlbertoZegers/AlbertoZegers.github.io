document.getElementById("user-form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const username = document.getElementById("username").value;
    const prospecto = document.getElementById("prospecto").value;
    const rut = document.getElementById("rut").value;
    const motivo = document.getElementById("motivo").value;
  
    console.log("Prospecto cerrado:");
    console.log("Nombre del cliente: ", username);
    console.log("Rut: ", rut);
    console.log("N° del prospecto: ", prospecto);
    console.log("Motivo del cierre: ", motivo); 
  });