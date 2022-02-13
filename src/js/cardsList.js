import { menu } from "../data/dataLocal";


const divPadre = document.querySelector(".divPadre");
const divCar = document.querySelector(".Car");
const h1totalCar = document.querySelector("#totalId");
let totalCar = 0;

//Funcion para crear cada carta del menu con base a la dataLocal
export const infoMenu2 = ( {name, id, price, Description, num} ) =>{
    
    const crearCarta = `
    <div class="card">
        <img src="assets/img/${id}.jpg" alt="${name}">
        <div class="container">
            <h4><b>${name}</b></h4>
            <h3>${price}</h3>
            <p>${Description}</p>
            <button class="buttonCar" id=${num}> Add Car </button>
            
        </div>
    </div>`
    const div = document.createElement("div"); 
    div.innerHTML=crearCarta;
    divPadre.append(div.firstElementChild);
    
}


//Funcion para crear cada carta del carrito de compras o de intereses
const infoCart = ({id, name, price, num}) => {
    const carCarta = `
        <div class="card">
            <img src="assets/img/${id}.jpg" alt="${name}" />
            <div class="container">
                <h4><b>${name}</b></h4>
                <h3>${price}</h3>
                <button class="btnRemove" id=${num}> Remove </button>
            </div>
        </div>`;
    totalCar += price;
    h1totalCar.innerText = totalCar;
    const div = document.createElement("div"); 
    div.innerHTML = carCarta;
    divCar.append(div.firstElementChild);
}

//Listener para agregar el producto al carro
divPadre.addEventListener( "click", (event) => {
    const nombreElemento = event.target.localName;
    // const todoElemento = event.path[0];
    const todoAddCar = event.target;
    if(nombreElemento.includes("button")){
        infoCart(menu[todoAddCar.id-1]);
    }
});

//Listener para borrar el div creado en js que contiene un elemento del carro de compras
divCar.addEventListener("click", (event) => {
    const nombreElemento = event.target.localName;
    
    if(nombreElemento.includes("button")){
        // console.log(nombreElemento);
        const todoElemento = event.target.parentElement.parentElement;
        const btnDelete = event.target;
        todoElemento.remove();
        
        totalCar -= menu[btnDelete.id-1].price;
        h1totalCar.innerText = totalCar;
        // console.log( menu[btnDelete.id-1].price);
        
    }
});
