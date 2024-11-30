import express from "express";
import cors from `cors`;
import mainRouter from './routes/mainRouter.js';

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app use ('/', mainRouter);

app.get('/', (request, response) => {
    const miMensaje = 'Mi primera api'
    const users = 
    response.status(200).json({ status: 200, message: "Respuesta exitosa", payload:"users" })
    })

    const PORT = 3000;
    app.listen(PORT, () => {
        console.log(`Servidor escuchando en el puerto ${PORT} ==> http://localhost: ${PORT}`);
        });