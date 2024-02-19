const p = document.querySelector('p');




const generateRandomData = () => {
    const data = [];
  
    for (let i = 1; i <= 200; i++) {
      const id = i;
      const producto = `Producto${Math.floor(Math.random() * 8) + 1}`;
      const precio = parseFloat((Math.random() * (70 - 1) + 1).toFixed(2));
      const fecha = new Date(2024, 0, Math.floor(Math.random() * 31) + 1).toISOString().split('T')[0];
  
      data.push({ id, producto, precio, fecha });
    }
  
    return data;
  };
  
  const jsonData = generateRandomData();
  const jsonString = JSON.stringify(jsonData, null, 2);
  
  console.log(jsonString);
  
  const P_texto = document.createTextNode(jsonString);
  p.appendChild(P_texto)
  


  // Puedes usar los datos generados como desees en el navegador.

