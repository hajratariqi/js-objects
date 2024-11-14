// const cars = {
//    honda:{
//         civic:{
//             name: "Civic 2024",
//             price: "2200933",
//             colors: ["red", "black", "white"],
//             company:{
//                 name: "Honda"
//             }
//         },
//         hondaCity:{
//             name: "Honda City",
//             price: "2200923233",
//             colors: ["gray", "black", "white"],
//             company:{
//                 name: "Honda"
//             }
//         }

//     },
//     daihatsu:{
//         Move:{
//             name: "Move",
//             price: "1200933",
//             colors: ["red", "blue", "white"],
//             company:{
//                 name: "Daihatsu"
//             }
//         },
//         mira:{
//             name: "Mira",
//             price: "1093233",
//             colors: ["red", "gray", "yellow"],
//             company:{
//                 name: "Daihatsu"
//             }
//         }

//     }, corolla:{
//         CorollaAltis:{
//             name: "Carolla Altis",
//             price: "2000000",
//             colors: ["white"],
//             company:{
//                 name: "Colrolla"
//             }
//         },
//         yaris:{
//             name: "Yaris",
//             price: 450000,
//             colors: [ "gray", 'red'],
//             disMonth: [6,7, 10],
//             discount: function(dis){                
//                 var bestPrice = this.price
//                 var date = new Date()
//                 var month = date.getMonth()
//                 var calcPrice = bestPrice * dis

//                 for(var i = 0; i < this.disMonth.length; i++){
//                     if(this.disMonth[i] == month){
//                         return bestPrice - calcPrice
//                     }
//                 }
//                 return bestPrice
//             },
//             company:{
//                 name: "Corolla"
//             },
//         }

//     },
// }


// var caller = cars.corolla.yaris.discount(.20)
// console.log(caller);

// // console.log('company name:' ,cars.honda.civic.company.name, 'car name' ,cars.honda.civic.name);
// // console.log('company name:' ,cars.daihatsu.Move.company.name, 'car name' ,cars.daihatsu.Move.name);
// // console.log('company name:' ,cars.corolla.yaris.name, 'car name' ,cars.corolla.yaris.company, cars.corolla.yaris.colors);




function Cars (name, date, team){  
    this.name = name,
    this.date = date,
    this.team = team
    this.heading = []
    this.img = []

    for(var i of team){
        this.heading.push(i.teamName)
        this.img.push(i.img)
    }
}

let team1 = [
    {teamName: 'pakistan', img: './pakistan.jpg'},
    {teamName: 'india', img: './india.jpg'}
]

let team2 = [
    {teamName: 'lahore', img: './lahore.jpg'},
    {teamName: 'india', img: './india.jpg'}
]

let team3 = [
    {teamName: 'islamabad', img: './islamabad.jpg'},
    {teamName: 'lahore', img: './lahore.jpg'}
]


console.log(new Cars('india',  '20, oct' , team1));
console.log(new Cars('pakistan' ,'12 oct' ,  team2));
console.log(new Cars('lahore', '2 oct' , team3));

