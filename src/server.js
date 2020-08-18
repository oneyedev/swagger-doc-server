require('dotenv').config()
const app = require('./app')
const port = Number(process.env.PORT) || 4242
app.listen(port, () => {
    console.log('doc server listening on port http://localhost:' + port)
})