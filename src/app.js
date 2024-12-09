import express from "express";
import cors from "cors";
import proyectosRouter from './routes/proyecto.routes.js';

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
// app.use('/', mainRouter);
app.use('/proyectos', proyectosRouter);


app.get('/', (request, response) => {
    const miMensaje = 'Mi primera api'
    const users = 
    response.status(200).json({ status: 200, message: "Respuesta exitosa", payload:"users" })
    })

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT} ==> http://localhost:3000 ${PORT}`);
        });