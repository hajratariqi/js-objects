// question 1


var itemsArray = [
    {name: "juice", price: "50", quantity: "3"},
    {name: "cookie", price: "30", quantity: "9"},
    {name: "shirt", price: "880", quantity: "1"},
    {name: "pen", price: "100", quantity: "2"}
];
let grandTotal = 0
let total = 0
for(let key in itemsArray){
    let =  itemPrice = itemsArray[key].price * itemsArray[key].quantity
    itemsArray[key].totalPrice = itemPrice
    
    total += itemsArray[key].totalPrice
}
console.log('total price of itemsArray is',total);



// question 2
const student = {
    name: 'hajra',
    email: 'hajra@gmail.com',
    password: '1234hajra',
    age: 16,
    gender: 'female',
    city: 'karachi',
    country: 'pakistan',
}

console.log('age' in student);
console.log('country' in student);
console.log('firstName' in student);
console.log('lastName' in student);


// question 3
function MyStudent(name, age, grade){
    this.name = name
    this.age = grade
    this.grade = age
}
console.log(new MyStudent('hajra', 16, 'A'))
console.log(new MyStudent('mustafa', 18, 'B'))

let oldUser 
const saveData = () =>{
let name = document.getElementById('name').value
let education = document.getElementById('education').value
let profession = document.getElementById('profession').value
let gender = document.querySelectorAll("input[name='gender']:checked")
let selectedGender = ''
for(let key of gender){
    key.value ? selectedGender = key.value : null
}
try{
    let saveData = localStorage.getItem('Person')
    saveData ? oldUser = JSON.parse(saveData) : oldUser = []
    
    let Person = function (name, selectedGender, education, profession)
    {
        this.name = name,  this.gender = selectedGender,  this.education = education,  this.profession = profession
    }
    oldUser.push(new Person(name, selectedGender, education, profession))
    localStorage.setItem('Person', JSON.stringify(oldUser))
}catch(error){
    console.log('error', error);
}finally{
//  document.getElementById('name').value = ''
//  document.getElementById('education').value = ''
//  document.getElementById('profession').value = ''
} 
}
