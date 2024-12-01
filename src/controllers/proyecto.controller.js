import data from '../database/data.js';


export const getProyectos = (req, res) => {
    console log (data);
    res.status (200).json({
        status:200,
        message: 'Proyectos: ${data.lenght}',
        payload: data,
        url : '/proyectos',
    })
}


export const getProyectobyID = (req, res) => {
    console log (req.params.id);
   res.status (200).json({
        status:200,
        message: 'Proyectos: ${data.lenght}',
        payload: data,
        url : '/proyectos',
    })
}
    