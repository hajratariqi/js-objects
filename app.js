const cars = {
   honda:{
        civic:{
            name: " Civic ",
            price: "2200933",
            colors: ["red", "black", "white"],
            modal: "2504",
            img : './assets/civic.jpg',
            company: {
                name: 'honda'
            }
        },
        hondaCity:{
            name: "City",
            price: "2200923233",
            colors: ["gray", "black", "white"],
            modal: "2004",
            img : './assets/honda-city.png',
            company: {
                name: 'honda'
            }
        }
    },
    daihatsu:{
        Move:{
            name: "Move",
            price: "1200933",
            colors: ["red", "blue", "white"],
            modal: "2000",
            img : './assets/move.webp',
            company: {
                name: 'daihatsu'
            }
        },
        mira:{
            name: "Mira",
            price: "1093233",
            colors: ["red", "gray", "yellow"],
            modal: "2024",
            img : './assets/mira.jpeg',
            company: {
                name: 'daihatsu'
            }
        }
    },
     corolla:{
        CorollaAltis:{
            name: "Altis",
            price: "2000000",
            colors: ["white"],
            modal: "1964",
            img : './assets/altis.webp',
            company: {
                name: 'corolla'
            }
        },
        yaris:{
            name: "Yaris",
            price: 450000,
            colors: [ "gray", 'red'],
            modal: "2022",
            img : './assets/yaris.png',
            company: {
                name: 'corolla'
            }
        }

    },
}

let campany = document.getElementById('campany')
let modal = document.getElementById('modal')
let main = document.getElementById('main')

for(let key in cars){
    campany.innerHTML += `<option value=${key}>${key}</option>`
}

const selectCompany = () =>{
    modal.innerHTML = ""
    for(let key in cars[campany.value]){
        modal.innerHTML += `<option value=${key}>${key}</option>`
    }
}

const searchCar = () =>{
   let currectCard  = cars[campany.value][modal.value];
   setData = localStorage.setItem('selectedCar', JSON.stringify(currectCard))
   displayData();
}

const displayData = () =>{
    const value = JSON.parse(localStorage.getItem('selectedCar'));
    if(value){
    main.innerHTML = `<div class='card'>
         <img src=${value.img} alt=${value.name} />
             <h1>${value.name}</h1>
             <p>Price ${value.price}</p>
             <p>Colors: ${value.colors.join(', ')}</p>
             <p>Modal: ${value.modal}</p>
         </div>`;
        }
        campany.value = value.company.name;
        modal.value = value.name;
        selectCompany()
    }
displayData()
