console.log("Destructuring");

const person = {
    name :"Albert Pinto",
    age :49,
    location :
    {
        street: "673A Palomino Dr",
        city :"pleasanton",
        temp :"70F",
        zip:94566,
        country:"USA"
    }
}
const {name="Anonymous",age,location="Not known"}=person;
const {street,city,zip,country,temp:temparature} =person.location;

console.log (`Name: ${name}`,`\nAge:${age}`,`\nStreet:${street}`,`\nCity:${city}`,`\nZip:${zip}`,
`\nCountry:${country}`,`\nTemparature:${temparature}`);
const book ={
    title:'Ego is the enemy',
    author:'Ryan Holiday',
    publisher :
    {
        name :'Penguin'
    }
}

const {name:publishername="Self-Published"}=book.publisher;
console.log(publishername);

const item =['Coffee (hot)','$2.00','$2.50','$2.75'];
const [itemName,,price]=item;
console.log (`A medium ${itemName} costs ${price}`);
   