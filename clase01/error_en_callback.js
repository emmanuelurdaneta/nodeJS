function leerArchivo(path, encodig, cb) {
    console.log(path)
    console.log(encodig)
    //cb(new Error('error fallo '), 'contenido del archivo')
    cb(undefined, 'contenido del archivo')
}

leerArchivo('/var/log/arch', 'utf8', (err, data)=>{
    if(err){
        console.log(err)
        return
    }
    console.log(data)
})