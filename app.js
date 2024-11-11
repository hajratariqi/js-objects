const cars = {
    honda:{
        civic:{
            name: "Civic 2024",
            price: "2200933",
            colors: ["red", "black", "white"],
            company:{
                name: "Honda"
            }
        },
        hondaCity:{
            name: "Honda City",
            price: "2200923233",
            colors: ["gray", "black", "white"],
            company:{
                name: "Honda"
            }
        }

    },
    daihatsu:{
        Move:{
            name: "Move",
            price: "1200933",
            colors: ["red", "blue", "white"],
            company:{
                name: "Daihatsu"
            }
        },
        mira:{
            name: "Mira",
            price: "1093233",
            colors: ["red", "gray", "yellow"],
            company:{
                name: "Daihatsu"
            }
        }

    }, corolla:{
        CorollaAltis:{
            name: "Carolla Altis",
            price: "2000000",
            colors: ["white"],
            company:{
                name: "Colrolla"
            }
        },
        yaris:{
            name: "Yaris",
            price: "450000",
            colors: [ "gray", 'red'],
            company:{
                name: "Corolla"
            },
            calc: ()=>{
                for (var i = 0; i < cars.corolla.yaris.colors.length; i++) {
                    if (cars.corolla.yaris.colors[i] == 'gray') {
                        cars.corolla.yaris.colors[i] = 'green'
                        console.log("Updated colors:", cars.corolla.yaris.colors);
                        break;
                    }
                }
            }
        }

    },
}

console.log('company name:' ,cars.honda.civic.company.name, 'car name' ,cars.honda.civic.name);
console.log('company name:' ,cars.daihatsu.Move.company.name, 'car name' ,cars.daihatsu.Move.name);
console.log('company name:' ,cars.corolla.yaris.name, 'car name' ,cars.corolla.yaris.company, cars.corolla.yaris.colors);

