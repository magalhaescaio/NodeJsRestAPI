const express = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const authConfig = require('./../config/auth.json')

const User = require('./../models/user')

const route = express.Router()

function generateToken (params = {}) {
  return jwt.sign(params, authConfig.secret, {
    expiresIn: 86400
  })
}

route.post('/signup', async (request, response) => {
  const { email } = request.body

  try {
    if (await User.findOne({ email })) { return response.status(400).json({ error: 'E-mail já existente' }) }

    const user = await User.create(request.body)

    user.senha = undefined

    const userToken = generateToken({ id: user.id })

    return response.json([{ user: user }, { token: userToken }])
  } catch (err) {
    return response.status(400).json({ error: 'Não foi possível efetuar cadastro' })
  }
})

route.post('/signin', async (request, response) => {
  const { email, senha } = request.body

  const user = await User.findOne({ email }).select('+senha')

  if (!user) { return response.status(400).json({ error: 'Usuário e/ou senha inválidos' }) }

  if (!await bcrypt.compare(senha, user.senha)) { return response.status(400).json({ error: 'Usuário e/ou senha inválidos' }) }

  user.senha = undefined

  try {
    const userData = await User.findByIdAndUpdate({ _id: user.id }, { ultimo_login: Date.now() }, { new: true, runValidators: true })

    userData.senha = undefined

    const userToken = generateToken({ id: userData.id })

    return response.json([{ user: userData }, { token: userToken }])
  } catch (err) {
    return response.status(400).json({ error: 'Não foi possível efetuar login' })
  }
})

module.exports = app => app.use('/auth', route)
