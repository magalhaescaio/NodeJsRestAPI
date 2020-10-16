const express = require('express')
const authMiddleware = require('./../middlewares/auth')

const User = require('./../models/user')

const route = express.Router()
route.use(authMiddleware)

route.get('/:id', async (request, response) => {
  if (request.params.id !== request.userId) { return response.status(400).json({ error: 'Não autorizado' }) }

  const user = await User.findById(request.userId)
  console.log(user)
  return response.json(user)
})

module.exports = app => app.use('/users', route)
