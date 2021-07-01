const fs = require('fs')
const asyncForLoop = require('./lib/asyncforloop')

function leerCarpeta(path, onFinish) {
    fs.readdir(path, (err, arrArchivos)=>{
        if(err){
        console.log(err)
        return
        }
        onFinish(undefined, arrArchivos)
    })
}


function recorrer_y_hacer(path, hacer, onFinish){
   
    leerCarpeta(path,(err, arrArchivos)=>{
    
        asyncForLoop(arrArchivos.length, (idx, next)=>{
            let archivo = arrArchivos[idx]
            let pathCompleto = [path, archivo].join('')
            hacer(pathCompleto,(err)=>{
                if(err) {
                    console.log(err)
                    return
                }
                next()
            })
        },()=>{        
            onFinish()
        })
    })
}



function segundaOrquetacion() {

    let path = '/var/www/emma/logPrueba/'
    recorrer_y_hacer(path, borrarArchivo,()=>{

        console.log('ejercicio terminado !!!!!!')
    })

    function hacerNada(pathCompleto, onFinish){
        let leyenda = ['no hago nada', pathCompleto].join(': ')
        console.log(leyenda)
        onFinish(undefined)
    }

    function mostrarArchivo(pathCompleto, onFinish) {
        fs.readFile(pathCompleto, 'utf8', (err,contenido) => {
            if (err) {
                console.log(err)
                return
            }
            //setTimeout(() => {
                console.log(contenido)
                onFinish(undefined)    
            //}, 1000);
        })
    }

    function borrarArchivo(pathCompleto, onFinish) {
        fs.unlink(pathCompleto, (err) => {
            if(err) {
                console.log(err)
                return
            }
            console.log([pathCompleto, 'borrado'].join(': '))
            onFinish(undefined)    
        })
    }
}

segundaOrquetacion()