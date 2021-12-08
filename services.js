const fetch = require("node-fetch");

function generateUniqueId() {
  // "123456"
  let id = "";

  for (let index = 0; index < 6; index++) {
    const randNumber = Math.floor(Math.random() * 9) + 1;

    id += randNumber;
  }

  return id;
}

async function getUnsplashPhoto({name, location}){
  const ACCESS_KEY = "BX-kmnw5O7jMm3FaTVEouqxnsbnCNJxP-nuC9uT22EI";
  const UNSPLASH_URL = `https://api.unsplash.com/photos/random/?client_id=${ACCESS_KEY}&query=${name}`;

  const fetchRes = await fetch(UNSPLASH_URL);
  const data = await fetchRes.json();
  return data.urls.small;

}

module.exports = { generateUniqueId,getUnsplashPhoto };
