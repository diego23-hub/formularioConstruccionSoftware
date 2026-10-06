const express = require('express');
const app = express();
const sequelize = require('./config/database');

app.use(express.json());

const personaRoutes = require('./routes/personas.routes');

app.use('/personas', personaRoutes);

sequelize.sync().then(() => {
    console.log('BD conectada');
    app.listen(3000, () => {
        console.log('Servidor en puerto 3000');
    });
});