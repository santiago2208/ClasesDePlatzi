import baseDeDatos from './baseDeDatos.js';

console.log(baseDeDatos);

const usuariosDiv = document.getElementById('usuarios-div');

// Obtiene la lista de usuarios
const listaUsuarios = baseDeDatos.usuarios;

// Crea una lista desordenada (ul) para mostrar los usuarios
const ul = document.createElement('ul');

// Itera sobre la lista de usuarios y crea un elemento de lista (li) para cada usuario
listaUsuarios.forEach(usuario => {
  const li = document.createElement('li');
  li.textContent = `Nombre: ${usuario.nombre}, Edad: ${usuario.edad}`;
  ul.appendChild(li);
});

// Agrega la lista a la etiqueta div con id "usuarios-div"
usuariosDiv.appendChild(ul);