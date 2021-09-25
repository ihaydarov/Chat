const { Sequelize } = require('sequelize');
const { User } = require('./User');
const { ChatDB } = require('./ChatDB');

const sequelize = new Sequelize('postgres', 'postgres', '1234', {
    host: 'localhost',
    dialect: 'postgres'
  });

  try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

  
var express = require('express')
var app = express()

app.listen(3000)

app.get('/', (req, res) => { res.send('Hello world') })
app.post('/users/create', (req, res) => { res.send('POST request to homepage') })

