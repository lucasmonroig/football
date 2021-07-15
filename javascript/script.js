//Formar el array de productos
let carrito = [];
let totalCarrito= 0;
class producto {
    constructor (id,nombre , precio, imagen,descripcion,stock,cantidad,precioTotal){
        this.id = id ;
        this.nombre = nombre;
        this.precio= parseInt(precio);
        this.imagen= imagen;
        this.descripcion = descripcion;
        this.stock=stock;
        this.cantidad = cantidad
        this.precioTotal= precioTotal
   }

 // Cuando apretas comprar, aparecen en el carrito de compras
   mostrarCarrito() {
    
    let acumuladorCarrito = ` `;


   for (let j=0;j<carrito.length;j++){
   
    
   // Carrito de compras
    acumuladorCarrito +=` 
    <div class="position-relative" >
    <div id="tabla-carrito  >
      
        
        <div class="position-absolute top-0 start-0 " class=" bg-success text-white">${carrito[j].nombre}</div>
        <div class="position-absolute top-0 start-50 translate-middle-x "> ${carrito[j].cantidad} </div>
        <div class="position-absolute top-0 end-0">$ ${carrito[j].precioTotal}</div>
      
        </div>
        </div>
                      `
   document.getElementById("carrito").innerHTML = acumuladorCarrito;
   }
   }
   
   //pushear los productos al carrito
    agregarCarrito() {
      
    const buscador =  carrito.find(producto => producto.nombre == this.nombre )
    

    if(buscador == this){
       
       this.cantidad +=1;
       this.precioTotal += this.precio
    }else{

      carrito.push(this)

    }
    totalCarrito+=this.precio;
    this.mostrarCarrito();
    document.getElementById("totalPrice").innerHTML = ` 
       
       <div class="p-3 mb-2 bg-success text-white">Total $ ${totalCarrito} </div> 
       
    ` 
   
}

 limpiarCarrito (){

  //let remover = document.getElementById("tabla-carrito")
  carrito =[];
  totalCarrito =0;
  this.cantidad =1;
 // remover.parentNode.removeChild(remover)
  document.getElementById("totalPrice").innerHTML = ` 
         <div>$ ${totalCarrito} </div> 
      ` 
  
  }
  
}
document.getElementById("botones").innerHTML =`
  <button  id="no.compra" type="button" class="btn btn-danger me-3 mb-5 mt-5"  data-bs-target="#exampleModal">
      Vaciar carrito
    </button>
  <button  type="button" class="btn btn-primary mb-5 mt-5" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Confirmar Compra
  </button>
  `


const producto1 = new producto(1,"Equipo completo",10000 ,"imagenes/equipocompleto.jpg","equipo completo del club",5,1,10000);
const producto2 = new producto(2,"Camiseta titular",3500 ,"imagenes/camiseta.jpg","camiseta titular del club",5,1,3500);
const producto3 = new producto(3,"Camiseta suplente",2500 ,"imagenes/camisetasuplente.jpg","camiseta suplente del club",5,1,2500);
const producto4 = new producto(4,"Bufanda",1200 +"$","imagenes/bufanda.jpg","bufanda del club",5,1,1200);
const producto5 = new producto(5,"Gorro",800 ,"imagenes/gorro.jpg","gorro del club",5,1,800);
const producto6 = new producto(6,"zapatillas",7000 +"$","imagenes/zapatillas.jpg","zapatillas oficiales del club",5,1,7000);


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
            <div class="container d-flex justify-content-center ">
            <div  class="p-3 mb-2 bg-secondary text-white ">
             
            
            <img   src= ${data.jugadores[h].pictureURL} > 
            <div class="contenido d-flex justify-content-center mt-4">
        <h3>${data.jugadores[h].nombre}</h3>
        </div>
        <div class="contenido d-flex justify-content-center">
        <p>Edad:  ${data.jugadores[h].edad}</p>
        </div>
        <div class="contenido d-flex justify-content-center">
        <p>Posicion: ${data.jugadores[h].puesto}</p>
        </div>
        
        
        </div>
        </div>
        </div>
        </div>
       
            `
        }
         
         

         document.getElementById("jug").innerHTML = acumuladorjugadores;
        

     })


}
function vaciarCarrito (){
 

let remover = document.getElementById("tabla-carrito")

remover.parentNode.removeChild(remover)


}

const voidButton= document.getElementById("no.compra")
voidButton.addEventListener('click',voidButtonclicked);
// Limpiar carrito



/* <h3>${data.jugadores[h].nombre}</h3>
            <p>Edad:  ${data.jugadores[h].edad}</p>
            <p>Posicion: ${data.jugadores[h].puesto}</p>

            </div>



 <div class="d-flex bd-highlight mb-3">
  <div class="me-auto p-2 bd-highlight">Flex item</div>
  <div class="p-2 bd-highlight">Flex item</div>
  <div class="p-2 bd-highlight">Flex item</div>
</div>





             <div class="container d-flex justify-content-center ">
                <div  class="p-3 mb-2 bg-secondary text-white ">
                 
                
                <img   src= ${data.jugadores[h].pictureURL} > 
                <div class="contenido d-flex justify-content-center mt-4">
            <h3>${data.jugadores[h].nombre}</h3>
            </div>
            <div class="contenido d-flex justify-content-center">
            <p>Edad:  ${data.jugadores[h].edad}</p>
            </div>
            <div class="contenido d-flex justify-content-center">
            <p>Posicion: ${data.jugadores[h].puesto}</p>
            </div>
            
            
            </div>
            </div>
            </div>
            </div>
           
            **/