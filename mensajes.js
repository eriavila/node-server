const colors = require('colors')
const {readline} = require('./readline')

const mostrarMenu = () => {
    return new Promise(resolve =>{

    
        console.clear();
        console.log('========================='.green); 
        console.log('Seleccione una opción'.green); 
        console.log('=========================\n'.green)
    
        console.log(`${'1.'.green } Crear tarea`);
        console.log(`${'2.'.green } Lista tareas`);
        console.log(`${'3.'.green } Listar tareas completas`);
        console.log(`${'4.'.green } listar tareas pendientes`);
        console.log(`${'5.'.green } Completar tarea(s)`);
        console.log(`${'6.'.green } Borrar tarea`);
        console.log(`${'0.'.green } Salir\n`);
        
        readline.question('Seleccione una opción: ',(opt) => {
            resolve(opt)
        })

    });        
    

} 

const pausa = () => {

        return new Promise( resolve =>{
        readline.question(`Presione ${'ENTER'.green} para continuar`,(opt) => {
                resolve();
            });
                
        });

    }


module.exports={mostrarMenu,pausa};




