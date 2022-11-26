var imagenes =['../styless/img/tra equi.jpg','../styless/img/creati.png','../styless/img/comunica.jpg','../styless/img/lider.jpg','../styless/img/organizacion.jpg','../styless/img/deciciones.jpg','../styless/img/respon.jpg']
cont = 0;


function girador(contenedor){

    contenedor.addEventListener('click', e =>{
        let devolver = contenedor.querySelector('.atras'),
             avanzar = contenedor.querySelector('.adelante'),
             img = contenedor.querySelector('img'),
             abt = e.target;


             if (abt == devolver) {
                if (cont > 0) {
                     img.src = imagenes[cont - 1];
                     cont--;
                } else {
                    img.src = imagenes[imagenes.length - 1];
                    cont = imagenes.length - 1;
                }
             } else if (abt == avanzar) {
                if (cont < imagenes.length - 1) {
                    img.src = imagenes[cont + 1];
                    cont++;
               } else {
                   img.src = imagenes[0]
                   cont =0;
             }

             }
    })
}

document.addEventListener("DOMContentLoaded",() =>{
let contenedor = document.querySelector('.contenedor');


girador(contenedor);

})