document.getElementById("user-form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const username = document.getElementById("username").value;
    const cliente = document.getElementById("cliente").value;
    const rut = document.getElementById("rut").value;
    const password = document.getElementById("password").value;

    if (username === "" || cliente === "" || rut === "" || password === "") {
      alert("Por favor, complete todos los campos.");
      return;
  }
  let data = {
      usuario: username,
      tipo: cliente,
      rut: rut,
      contraseña: password,
  };
  
    console.log("Nuevo cliente creado:");
    console.log("Nombre del cliente: ", username);
    console.log("Rut: ", rut);
    console.log("Tipo de cliente: ", cliente);
    console.log("Contraseña: ", password); 
  });