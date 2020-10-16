const mongoose = require('./../database')
const bcrypt = require('bcryptjs')

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  email: {
    type: String,
    unique: true,
    require: true,
    lowercase: true
  },
  senha: {
    type: String,
    required: true,
    select: false
  },
  telefones: [{
    numero: Number,
    ddd: Number
  }],
  data_criacao: {
    type: Date,
    default: Date.now
  },
  data_atualizacao: {
    type: Date
  },
  ultimo_login: {
    type: Date,
    default: Date.now
  }
})

UserSchema.pre('save', async function (next) {
  const hash = await bcrypt.hash(this.senha, 10)

  this.senha = hash

  next()
})

const User = mongoose.model('User', UserSchema)

module.exports = User
