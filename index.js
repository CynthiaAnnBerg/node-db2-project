const server = require('./api/server')
const carRouter = require('./cars/carRouter')

const server = express()
const port = process.env.PORT || 5000;

server.listen(port, () => console.log(`\n** Running on port ${port} **\n`))


server.use(express.json())

