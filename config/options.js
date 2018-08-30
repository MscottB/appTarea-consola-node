const descripcion = {
    alias: 'd',
    demand: true,
    desc: 'descripcion de la tarea por hacer'

}


//Opciones comando crear
const cre = {
    descripcion: {
        alias: 'd',
        demand: true,
        desc: 'descripcion de la tarea por hacer'

    }
}

//Opciones comando actualizar
const act = {
    descripcion: {
        alias: 'd',
        demand: true,
        desc: 'descripcion de la tarea por hacer'

    },
    completado: {
        alias: 'c',
        default: true,
        desc: 'marca como completado o pendiente la tarea'
    }
}

//opciones comando borrar
const bor = {
    descripcion: {
        alias: 'd',
        desc: 'borra una tarea hecha por medio de su descripcion'
    }
}

module.exports = {
    cre,
    act,
    bor
}