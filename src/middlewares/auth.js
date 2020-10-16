const jwt = require('jsonwebtoken')
const authConfig = require('./../config/auth.json')

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization

  if (!authHeader) { return res.status(401).json({ error: 'Token não foi informado' }) }

  const parts = authHeader.split(' ')

  if (!parts.length === 2) { return res.status(401).json({ error: 'Token inválido' }) }

  // 0 - Bearer
  // 1 - Token
  const [scheme, token] = parts

  if (!/^Bearer$/i.test(scheme)) { return res.status(401).json({ error: 'Token inválido' }) }

  jwt.verify(token, authConfig.secret, (err, decoded) => {
    if (err) return res.status(401).json({ error: 'Não autorizado' })

    req.userId = decoded.id

    return next()
  })
}
