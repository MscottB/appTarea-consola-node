const opt = require('./options');

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', opt.cre)
    .command('actualizar', 'Actualizar el estado completo de una tarea', opt.act)
    .command('borrar', 'Borra una tarea hecha', opt.bor)
    .help()
    .argv;

module.exports = {
    argv
}