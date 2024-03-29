import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1";


function postData(urlApi, data) {
  const response = fetch(urlApi, {
    method: "POST",
    mode: "cors",
    credentials: "same-origin",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return response;
}

const data = {
  title: "camisa blanca",
  price: 30000,
  description: "Camisa de algodon blanca",
  categoryId: 1,
  images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEt97Ng7oE1lQFANDw_bpvzwywHPiS4Kzifg&usqp=CAU"],
};

postData(`${API}/products`, data)
  .then((response) => response.json())
  .then((data) => console.log(data));
