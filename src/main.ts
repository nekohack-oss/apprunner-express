import express, { Express } from 'express'

const app: Express = express()

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const router: express.Router = express.Router()
router.get('/', (req: express.Request, res: express.Response) => {
    res.send('Hello World')
})
app.use(router)

app.listen(9000, () => { console.log('Listen on port 9000') })
