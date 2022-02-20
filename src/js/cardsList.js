
const divPadre = document.querySelector(".divPadre");

//Funcion para crear cada carta del menu con base a la dataLocal
export const infoMenu2 = ( {name, id, price, Description, priceDollar} ) =>{
    
    const crearCarta = `
    <div class="card">
        <img src="assets/img/${id}.jpg" alt="${name}">
        <h4 class='container txtCards' >${name}</h4>

        <div class="container" id='prices'>    
            <span>₡${price}</span>
            <span>$${priceDollar}</span>
        </div>

        <p class='container txtCards'>${Description}</p>
    </div>`
    const div = document.createElement("div"); 
    div.innerHTML=crearCarta;
    divPadre.append(div.firstElementChild);
    
}



