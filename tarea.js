const { v4: uunidv4} = require('uuid');

class Tarea {

    id= '';
    desc = '';
    completadaEn = null 

    constructor(desc ) {

        this.id = uunidv4();
        this.desc = desc;
        this.completadaEn = null;


    }

}

module.exports={Tarea};