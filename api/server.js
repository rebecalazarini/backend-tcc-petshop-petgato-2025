const express = require("express");
const cors = require("cors");
const { PrismaClient } = require("@prisma/client");
require("dotenv").config();

const routes = require('../src/routes');

const prisma = new PrismaClient();
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); 
app.use('/', routes);

app.listen(3000, () => {
    console.log(`Servidor rodando em http://localhost:3000`);
});


