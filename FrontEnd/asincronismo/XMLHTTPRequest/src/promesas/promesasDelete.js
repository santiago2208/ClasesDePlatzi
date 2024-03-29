import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1";


function deleteData(urlApi) {
  const response = fetch(urlApi, {
    method: "DELETE",
  });
  return response;
}


deleteData(`${API}/products/152`)
  .then((response) => response.json())
  .then((responseJson) => console.log(responseJson));
