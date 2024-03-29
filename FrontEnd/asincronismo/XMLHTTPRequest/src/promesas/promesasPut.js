import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1";


function putData(urlApi, data) {
  const response = fetch(urlApi, {
    method: "PUT",
    mode: "cors",
    credentials: "same-origin",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return response;
}

const data = {
  title: "camisa blanca_v1",
  price: 25000,
};

putData(`${API}/products/152`, data)
  .then((response) => response.json())
  .then((data) => console.log(data));
