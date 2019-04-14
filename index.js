import logger from 'morgan'
import express, { Router } from 'express'
import bodyParser from 'body-parser'
import chalk from 'chalk'
import apicache from 'apicache'
import middlewares from './src/middlewares'
import * as controller from './src/controllers'

const app = express()
const port = process.env.PORT || 3001
const router = new Router()
const cache = apicache.middleware
const onlyStatus200 = (req, res) => res.statusCode === 200
const cacheSuccesses = cache('10 days', onlyStatus200)

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

router.get('/:term', cacheSuccesses, controller.search)
app.use('/search', router)

app.use(middlewares.error)

if (!module.parent) {
  app.listen(port, err => {
    if (err) {
      console.log(chalk.red('Não pode rodar.'))
    } else {
      console.log(
        chalk.green.bold(
          `
        Um brinde ao sucesso! 🍺
        App escutando na porta: ${port} 🍕
        Env: ${port} 🦄
      `,
        ),
      )
    }
  })
}

