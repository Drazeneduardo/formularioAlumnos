const dividir =(num1, num2, cb) =>{
    num1 === 0 && cb(new Error("no podés dividir por cero"))
    num2 === 0 && cb(new Error("no podés dividir por cero"))
    cb(null, num1/num2) // cree un callback con dos parametros, el primero es error el segundo es todo ahí 
}

dividir ( 5, 0 , (error, result1) => { // el tercer parametro es el callback, ahí le paso los dos param que le creé: un error o un resultado
    if (error){
    throw error
    }else{
    console.log(result1)}
})
