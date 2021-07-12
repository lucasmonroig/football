//Formar el array de productos
let carrito = [];
class producto {
    constructor (id,nombre , precio, imagen,descripcion,stock,cantidad){
        this.id = id ;
        this.nombre = nombre;
        this.precio= parseInt(precio);
        this.imagen= imagen;
        this.descripcion = descripcion;
        this.stock=stock;
        this.cantidad = cantidad

   }

 // Cuando apretas comprar, aparecen en el carrito de compras
   mostrarCarrito() {
       
    let acumuladorCarrito = ` `;


   for (let j=0;j<carrito.length;j++){
   
    
   // Carrito de compras
    acumuladorCarrito +=` 
    
    <div id="tabla-carrito">
      
        
        <div>${carrito[j].nombre}</div>
        <div> ${carrito[j].cantidad} </div>
        <div>$ ${carrito[j].precio}</div>
        
        </div>
                      `
   document.getElementById("carrito").innerHTML = acumuladorCarrito;
   }
   }
   
   //pushear los productos al carrito
    agregarCarrito() {
      
    const buscador =  carrito.find(producto => producto.nombre == this.nombre )
    console.log(buscador)
    if(buscador == this){
       
       this.cantidad +=1;
       this.precio += this.precio
    }else{

      carrito.push(this)

    }
    this.mostrarCarrito();
}
}

const producto1 = new producto(1,"Equipo completo",10000 ,"imagenes/equipocompleto.jpg","equipo completo del club",5,1);
const producto2 = new producto(2,"Camiseta titular",3500 ,"imagenes/camiseta.jpg","camiseta titular del club",5,1);
const producto3 = new producto(3,"Camiseta suplente",2500 ,"imagenes/camisetasuplente.jpg","camiseta suplente del club",5,1);
const producto4 = new producto(4,"Bufanda",1200 +"$","imagenes/bufanda.jpg","bufanda del club",5,1);
const producto5 = new producto(5,"Gorro",800 ,"imagenes/gorro.jpg","gorro del club",5,1);
const producto6 = new producto(6,"zapatillas",7000 +"$","imagenes/zapatillas.jpg","zapatillas oficiales del club",5,1);


const listaProductos  = [producto1,producto2,producto3,producto4,producto5,producto6];
const listaProductos1 = document.getElementById('producto')


let acumulador = ` `;

//Aparecen las CARDS y darle la opcion de comprar al usuario
for (let i=0;i<listaProductos.length;i++){

 

 acumulador +=` 
 <div class="card" style="width: 18rem;">
 <img src="${listaProductos[i].imagen}" class="card-img-top" alt="${listaProductos[i].nombre}>
 <div class="card-body">
 <h5 class="card-title">${listaProductos[i].nombre}</h5>
 <p class="card-text">${listaProductos[i].precio} $</p>
 
 
 

 <button onclick="listaProductos[${i}].agregarCarrito() " href="#" id="prod-${listaProductos[i].id}" class="btn btn-primary">Comprar</button>
  </div>
  
  
  </div>   
</div>`
document.getElementById("producto").innerHTML = acumulador;
}

// desplegar jugadores con JSON
function players () {
     let acumuladorjugadores = ` `  ;
     fetch ("javascript/users.json")
     .then(response =>response.json())
     .then( data =>{ 

        for(let h=0;h<data.jugadores.length;h++){
            acumuladorjugadores += `
                    
            <div>
            <h3>${data.jugadores[h].nombre}</h3>
            <p>${data.jugadores[h].edad}</p>
            <p>${data.jugadores[h].puesto}</p>

            </div>
                              ` 
        }
         
         

         document.getElementById("jug").innerHTML = acumuladorjugadores;
        

     })


}
// Limpiar carrito

function limpiarCarrito (){

let remover = document.getElementById("tabla-carrito")

remover.parentNode.removeChild(remover)


}

