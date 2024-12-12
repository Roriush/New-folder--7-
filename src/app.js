import express from "express";
import cors from "cors";
import proyectosRouter from './routes/main.route.js';
import { db } from './database/config.js';
import { useEffect} from 'react';

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

function App () {
    UseEffect (() => {
        fetch: ('http://localhost:5173')
        .then(response => response.json())
        .then(data => console.log(data))
        },[])
        }

        export default App;

        