const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const urls = []
for (let i = 0; i < 100; i++) {
  const name = process.env[`SWAGGER_NAME_${i}`]
  const url = process.env[`SWAGGER_URL_${i}`]
  if(name && url){
    urls.push({name,url})
  }
}
console.dir(urls)
const options = {
  explorer: true,
  swaggerOptions: {urls}
}

app.use(swaggerUi.serve, swaggerUi.setup(null, options));
module.exports = app