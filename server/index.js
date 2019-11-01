const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const { mongoose }= require('./conexion_database');

//configuraciones
app.set('port', process.env.PORT || 3000);

//Funciones para procesar datos-Middleware
app.set(morgan('dev'));
app.use(express.json());
app.use(cors({origin:'http://localhost:4200'}));

//Rutas
app.use('/api/notes',require('./routes/notes.routes'));

////Escucha
app.listen(app.get('port'),()=>{
    console.log('Server corriendo en puerto '+app.get('port'));
});
