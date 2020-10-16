const mongoose = require('mongoose')

var uri = 'mongodb+srv://admin:Mag232aa@cluster0.08j1m.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority'

mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true })
mongoose.Promise = global.Promise
module.exports = mongoose
