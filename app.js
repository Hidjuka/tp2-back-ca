const express = require('express');
const mongoose = require('mongoose');
const interventionRoutes = require('./routes/intervention');
const agentRoutes = require('./routes/agent');

mongoose.set("strictQuery", false);
mongoose.connect('mongodb+srv://admin:admin@cluster0.ij0ogsd.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

const app = express();

app.use('/api/intervention', interventionRoutes);
app.use('/api/agent', agentRoutes);

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

module.exports = app;