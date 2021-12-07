const fs = require('fs');
const axios = require('axios');



const generateUsers = async (nbUser) => {

  let uri = "https://randomuser.me/api/"
  let {data} = await axios.get(uri, {
    params: {
      results: nbUser
    }
  });

  fs.writeFileSync('dbusers.json', JSON.stringify(data, null, 4));

  console.log("Fichier généré avec succès");

}

generateUsers(5000);
