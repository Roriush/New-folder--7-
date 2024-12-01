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

const {id} = req.params ;

if (isNaN(Number(id))) {
    return res.status(400).json({status:400, message: 'El id no es valido'})

const proyectobyID = data.find(proyecto => proyecto.id === id);

    console log (!proyecto);
    return res.status(400).json({status:400, message: 'El proyecto no existe'})
}



    console log (req.params.id);
   res.status (200).json({
        status:200,
        message: 'Proyectos: ${data.lenght}',
        payload: data,
        url : '/proyectos',
    })
}
    

export const createProyecto = (req, res) => {
    const {name, description, image, url} = req.body;
    proyecto.id = data.lenght + 1;

    res status (201).json({
        data.push (proyecto)
        status:201,
        message: 'Proyecto creado con exito',
        payload: req.body,
        url : '/proyectos',
        })
        }