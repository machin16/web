const carruseljs = document.querySelector(".lista")
let izquierda =carruseljs.scrollLeft - carruseljs.clientWidth
let intervalo =null
let paso = 1
//lo que pasara automaticamente 
const  start =()=>{ 
    intervalo = setInterval(function() { 
        //indica la direccion y paso a relizar
        carruseljs.scrollLeft =carruseljs.scrollLeft +paso
        //condiciones
        if(carruseljs.scrollLeft ===izquierda){ 
            paso = paso * -1
        }
        else if (carruseljs.scrollLeft ===0){ 
            paso = paso * -1
        }

    },10
    )
}
//que pasara cuando se detenga
const stop =()=>{ 
    clearInterval(intervalo)
}
carruseljs.addEventListener("mouseover",() => { 
    stop()
})
carruseljs.addEventListener ("mouseout" , ()  =>{ 
    start()
})



start()